const ts = require('typescript');
const path = require('path');
const fs = require('fs-extra');

module.exports = function(fileName) {
  const sourceFile = ts.createSourceFile(fileName, fs.readFileSync(path.resolve(fileName), {encoding: 'utf8'}), ts.ScriptTarget.Latest, true);
  const data = {
    class: '',
    type: '',
    selector: '',
    doc: null,
    inputs: [],
    outputs: [],
    methods: [],
    props: [],
    getProps: [],
    setProps: [],
  };
  ts.forEachChild(sourceFile, readNodeWrapper('', data, null));
  return data;
};

function readNodeWrapper(level, data, parent) {
  return function readNode(node) {
    switch (node.kind) {
      case ts.SyntaxKind.ClassDeclaration:
        data.class = node.name.text;
        data.type = node.decorators[0].expression.expression.text;
        data.doc = getDoc(node);
        break;
      case ts.SyntaxKind.PropertyDeclaration: {
        if (node.jsDoc) {
          ts.forEach(node.jsDoc, readNodeWrapper(level + '--', data, 'class'));
        }
        const prop = getProp(node);
        if (prop) {
          data.props.push(prop);
        }
        break;
      }
      case ts.SyntaxKind.SetAccessor: {
        const method = getMethod(node);
        if (method) {
          data.setProps.push(method);
        }
        break;
      }
      case ts.SyntaxKind.GetAccessor: {
        const prop = getProp(node);
        if (prop) {
          data.getProps.push(prop);
        }
        break;
      }
      case ts.SyntaxKind.MethodDeclaration:
        const method = getMethod(node);
        if (method) {
          data.methods.push(method);
        }
        break;
      case ts.SyntaxKind.Decorator:
        const name = node.expression.expression.text;
        if (node.parent.kind === ts.SyntaxKind.ClassDeclaration) {
          parent = 'class';
        }
        if (name === 'Input') {
          const input = {
            name: getDecoratorName(node),
            type: getInputDecoratorType(node),
            default: getInitializerValue(node.parent),
            doc: getDoc(node.parent),
          };
          data.inputs.push(input);
        }
        if (name === 'Output') {
          const input = {
            name: getDecoratorName(node),
            type: getOutputDecoratorType(node),
            doc: getDoc(node.parent),
          };
          data.outputs.push(input);
        }
        break;
      case ts.SyntaxKind.PropertyAssignment:
        if (node.name.text === 'selector') {
          data.selector = node.initializer.text;
        }
        break;
      default:
    }
    ts.forEachChild(node, readNodeWrapper(level + '--', data, parent));
  }
}

function dive(node, kind, callback) {
  ts.forEachChild(node, (localNode) => {
    if (localNode.kind === kind) {
      callback(localNode);
    } else {
      dive(localNode, kind, callback);
    }
  });
}

function getDoc(node) {
  let doc = null;
  if (node.jsDoc) {
    ts.forEach(node.jsDoc, (node) => {
      if (node.kind === ts.SyntaxKind.JSDocComment) {
        doc = {
          comment: node.comment,
          tags: node.tags
              ? node.tags.map(t => ({
                name: t.tagName.text,
                value: t.comment,
              }))
              : [],
        };
      }
    });
  }
  return doc;
}

function getDecoratorName(node) {
  // if name passed by decorator param
  let inParam = null;
  dive(node, ts.SyntaxKind.StringLiteral, (node) => {
    inParam = node.text;
  });
  if (inParam) {
    return inParam;
  } else {
    // if name defined in var name
    if (node.parent.kind === ts.SyntaxKind.PropertyDeclaration) {
      return node.parent.name.text;
    } else if (node.parent.kind === ts.SyntaxKind.MethodDeclaration) {
      return node.parent.name.text;
    } else if (node.parent.kind === ts.SyntaxKind.SetAccessor) {
      return node.parent.name.text;
    }
  }
}

function getInputDecoratorType(node) {
  const parent = node.parent;
  const kind = getKindNameById(node.parent.kind);
  if (node.parent.kind === ts.SyntaxKind.SetAccessor) {
    // const typeKind = getKindNameById(node.parent.type.kind);
    return getTypeFromTypeNode(node.parent.parameters[0].type);
  } else {
    if (node.parent.type) {
      return getTypeFromTypeNode(node.parent.type);
    } else {
    }
  }
}

function getInitializerValue(node) {
  if (node.initializer) {
    switch (node.initializer.kind) {
      case ts.SyntaxKind.StringLiteral:
        return node.initializer.text;
        break;
      case ts.SyntaxKind.NumericLiteral:
        return node.initializer.text;
        break;
      case ts.SyntaxKind.FalseKeyword:
        return false;
        break;
      case ts.SyntaxKind.TrueKeyword:
        return true;
        break;
      case ts.SyntaxKind.NullKeyword:
        return null;
      case ts.SyntaxKind.NewExpression:
        return node.initializer.expression.text;
        break;
    }
  }
}

function getOutputDecoratorType(node) {
  if (node.parent.initializer && node.parent.initializer.typeArguments) {
    return node.parent.initializer.typeArguments.map(arg => getTypeFromTypeNode(arg));
  }
}

function getKindNameById(id) {
  return ts.SyntaxKind[id];
}

function getTypeFromTypeNode(node) {
  switch (node.kind) {
    case ts.SyntaxKind.TypeReference:
      return node.typeArguments
          ? {
            type: node.typeName.text,
            args: node.typeArguments.map(arg => getTypeFromTypeNode(arg))
          }
          : node.typeName.text;
      break;
    case ts.SyntaxKind.UnionType:
      return node.types.map(t => getTypeFromTypeNode(t));
    default:
      return getKindNameById(node.kind);
  }
}

function getMethodParams(node) {
  return node.parameters.map(p => ({
    name: p.name.text,
    type: getTypeFromTypeNode(p.type),
  }));
}

function getProp(node) {
  if (!node.modifiers || node.modifiers
          .findIndex(m =>
              m.kind === ts.SyntaxKind.PrivateKeyword ||
              m.kind === ts.SyntaxKind.ProtectedKeyword) === -1) {
    return {
      name: node.name.text,
      typeParameters: node.typeParameters ? node.typeParameters.map(t => t.name.text) : undefined,
      type: node.type ? getTypeFromTypeNode(node.type) : undefined,
      default: getInitializerValue(node),
      doc: getDoc(node),
    };
  } else {
    return null;
  }
}

function getMethod(node) {
  if (!node.modifiers ||
      node.modifiers.findIndex(m =>
          m.kind === ts.SyntaxKind.PrivateKeyword ||
          m.kind === ts.SyntaxKind.ProtectedKeyword
      ) === -1) {
    return {
      name: node.name.text,
      typeParameters: node.typeParameters ? node.typeParameters.map(t => t.name.text) : undefined,
      type: node.type ? getTypeFromTypeNode(node.type) : undefined,
      params: getMethodParams(node),
      doc: getDoc(node),
    };
  } else {
    return null;
  }
}
