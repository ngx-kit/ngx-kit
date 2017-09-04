const ts = require('typescript');
const path = require('path');
const fs = require('fs-extra');
const walk = require('walk');

const releaseConfig = require('./release.config.json');
const files = [];

// debugFile('./package/src/default-theme/extenders/kit-button-extender.directive.ts');

walker = walk.walk('./package/src');

walker.on('file', function(root, fileStats, next) {
  const module = root.split('\\')[1];
  if (fileStats.name.indexOf('.component.ts') !== -1 || fileStats.name.indexOf('.directive.ts') !== -1) {
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
    doc: '',
    inputs: [],
    outputs: [],
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
        doc = node.comment;
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

function getTypeFromValueNode(node) {
  switch (node.kind) {
    case ts.SyntaxKind.NewExpression:
      return [
        node.expression.text,
        node.typeArguments
            ? node.typeArguments.map(arg => getTypeFromTypeNode(arg))
            : '',
      ];
      break;
    default:
      return getKindNameById(node.kind);
  }
}

function getTypeFromTypeNode(node) {
  switch (node.kind) {
    case ts.SyntaxKind.TypeReference:
      return node.typeArguments
          ? [node.typeName.text, node.typeArguments.map(arg => getTypeFromTypeNode(arg))]
          : node.typeName.text;
      break;
    default:
      return getKindNameById(node.kind);
  }
}

function debugFile(fileName) {
  const sourceFile = ts.createSourceFile(fileName, fs.readFileSync(path.resolve(fileName), {encoding: 'utf8'}), ts.ScriptTarget.Latest, false);
  fs.outputFile(path.resolve('./api-gen.debug'), JSON.stringify(sourceFile));
}
