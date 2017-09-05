const ts = require('typescript');
const path = require('path');
const fs = require('fs-extra');
const walk = require('walk');

const releaseConfig = require('./release.config.json');
const files = [];

// genFile('./package/src/modal/kit-modal.service.ts');

walker = walk.walk('./package/src');

walker.on('file', function(root, fileStats, next) {
  const module = root.split('\\')[1];
  if (fileStats.name.indexOf('.component.ts') !== -1
      || fileStats.name.indexOf('.directive.ts') !== -1
      || fileStats.name.indexOf('.service.ts') !== -1) {
    const file = genFile(path.resolve(root, fileStats.name));
    file['module'] = module;
    files.push(file);
  }
  next();
});

walker.on('errors', function(root, nodeStatsArray, next) {
  console.log('err', nodeStatsArray);
  next();
});

walker.on('end', function() {
  fs.outputFile(path.resolve('./dist/release/api.json'), JSON.stringify({
    genTime: new Date(),
    version: releaseConfig.version,
    files,
  }), function(err) {
    if (err) {
      return console.log(err);
    }
  });
});

function genFile(fileName) {
  const sourceFile = ts.createSourceFile(fileName, fs.readFileSync(path.resolve(fileName), {encoding: 'utf8'}), ts.ScriptTarget.Latest, true);
  const data = {
    class: '',
    type: '',
    selector: '',
    doc: null,
    inputs: [],
    outputs: [],
    methods: [],
  };
  ts.forEachChild(sourceFile, readNodeWrapper('', data, null));
  return data;
}

function readNodeWrapper(level, data, parent) {
  return function readNode(node) {
    switch (node.kind) {
      case ts.SyntaxKind.ClassDeclaration:
        data.class = node.name.text;
        data.type = node.decorators[0].expression.expression.text;
        data.doc = getDoc(node);
        break;
      case ts.SyntaxKind.PropertyDeclaration:
        if (node.jsDoc) {
          ts.forEach(node.jsDoc, readNodeWrapper(level + '--', data, 'class'));
        }
        break;
      case ts.SyntaxKind.MethodDeclaration:
        if (!node.modifiers || node.modifiers
                .findIndex(m =>
                    m.kind === ts.SyntaxKind.PrivateKeyword ||
                    m.kind === ts.SyntaxKind.ProtectedKeyword) === -1) {
          const method = {
            name: node.name.text,
            typeParameters: node.typeParameters ? node.typeParameters.map(t => t.name.text) : undefined,
            type: node.type ? getTypeFromTypeNode(node.type) : undefined,
            params: getMethodParams(node),
            doc: getDoc(node),
          };
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
            default: getInputDecoratorDefault(node),
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
                comment: t.comment,
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
    }
  }
}

function getInputDecoratorType(node) {
  if (node.parent.type) {
    return getTypeFromTypeNode(node.parent.type);
  } else {
  }
}

function getInputDecoratorDefault(node) {
  if (node.parent.initializer) {
    switch (node.parent.initializer.kind) {
      case ts.SyntaxKind.StringLiteral:
        return node.parent.initializer.text;
        break;
      case ts.SyntaxKind.NumericLiteral:
        return node.parent.initializer.text;
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
        return node.parent.initializer.expression.text;
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
  const kindName = getKindNameById(node.kind);
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
