export function mathParse(string: string): number {
  return MathParser.parse(string);
}

/**
 * @todo typing
 */
export class MathParser {
  static allocFx(eq: any, symbol: any, alloc: any, minus?: any) {
    minus = (typeof minus !== 'undefined'); // sometimes we want to capture minus signs, sometimes not
    if (MathParser.strContain(eq, symbol)) {
      const middleIndex = eq.indexOf(symbol);
      const left = MathParser.getSide(eq, middleIndex, -1, minus);
      const right = MathParser.getSide(eq, middleIndex, 1, false);
      eq = MathParser.replaceAll(eq, left + symbol + right, alloc(left, right));
    }
    return eq;
  } // fx to generically map a symbol to a function for parsing
  static getSide(haystack: any, middle: any, direction: any, minus: any) {
    let i = middle + direction;
    let term = '';
    const limit = (direction === -1) ? 0 : haystack.length; // set the stopping point, when you have gone too far
    while (i * direction <= limit) { // while the current position is >= 0, or <= upper limit
      if (MathParser.isParseable(haystack[i], minus)) {
        if (direction === 1) {
          term = term + haystack[i];
        } else {
          term = haystack[i] + term;
        }
        i += direction;
      } else {
        return term;
      }
    }
    return term;
  } // general fx to get two terms of any fx (multiply, add, etc)
  static isParseable(n: any, minus: any) {
    return (!isNaN(n) || (n === '-' && !minus) || n === '.');
  } // determine if char should be added to side
  static parse(string: string) {
    return MathParser.round(MathParser.solveStr(MathParser.reformat(string)));
  }

  static reformat(s: any) {
    s = s.toLowerCase();
    s = MathParser.replaceAll(s, '-(', '-1*(');
    s = MathParser.replaceAll(s, ')(', ')*(');
    s = MathParser.replaceAll(s, ' ', '');
    s = MathParser.replaceAll(s, '-', '+-');
    s = MathParser.replaceAll(s, '--', '+');
    s = MathParser.replaceAll(s, '++', '+');
    s = MathParser.replaceAll(s, '(+', '(');
    for (let i = 0; i < 10; i++) {
      s = MathParser.replaceAll(s, i + '(', i + '*' + '(');
    }
    while (s.charAt(0) === '+') {
      s = s.substr(1);
    }
    return s;
  } // standardize string format
  static replaceAll(haystack: any, needle: any, replace: any) {
    return haystack.split(needle).join(replace);
  } // replace all fx
  static round(value: number): number {
    return Math.round(value * 100) / 100;
  }

  static solveStr(eq: any) {
    firstNest:
        while (MathParser.strContain(eq, '(')) { // while the string has any parentheses
          const first = eq.indexOf('('); // first get the earliest open parentheses
          let last = first + 1; // start searching at the character after
          let layer = 1; // we might run into more parentheses, so this integer will keep track
          while (layer !== 0) { // loop this until we've found the close parenthesis
            if (eq[last] === ')') { // if we run into a close parenthesis, then subtract one from 'layer'
              layer--;
              if (layer === 0) {
                break;
              } // if it is the corresponding closing parenthesis for our outermost open
              // parenthesis, then we can deal with this expression
            } else if (eq[last] === '(') { // if we see an open parenthesis, add one to 'layer'
              layer++;
            }
            last++; // increment the character we're looking at
            if (last > eq.length) {
              break firstNest;
            }
          }
          const nested = eq.substr(first + 1, last - first - 1); // get the expression between the parentheses
          if (last + 1 <= eq.length) { // if there is exponentiation, change to a different symbol
            if (eq[last + 1] === '^') {
              eq = eq.substr(0, last + 1) + '&' + eq.substr((last + 1) + 1);
            }
          }
          const solvedStr = MathParser.solveStr(nested);
          const preStr = '(' + nested + ')';
          eq = eq.replace(preStr, solvedStr); // replace parenthetical with value
        }
    while (MathParser.strContain(eq, '^')) {
      eq = MathParser.allocFx(eq, '^', function (l: any, r: any) {
        return Math.pow(parseFloat(l), parseFloat(r));
      }, false);
    }
    while (MathParser.strContain(eq, '&')) {
      eq = MathParser.allocFx(eq, '&', function (l: any, r: any) {
        return Math.pow(parseFloat(l), parseFloat(r));
      });
    } // account for things like (-3)^2
    while (MathParser.strContain(eq, '*') || MathParser.strContain(eq, '/')) {
      let multiply = true;
      if (eq.indexOf('*') < eq.indexOf('/')) {
        multiply = (MathParser.strContain(eq, '*'));
      } else {
        multiply = !(MathParser.strContain(eq, '/'));
      }
      eq = (multiply) ? MathParser.allocFx(eq, '*', function (l: any, r: any) {
        return parseFloat(l) * parseFloat(r);
      }) : MathParser.allocFx(eq, '/', function (l: any, r: any) {
        return parseFloat(l) / parseFloat(r);
      });
    }
    while (MathParser.strContain(eq, '+')) {
      eq = MathParser.allocFx(eq, '+', function (l: any, r: any) {
        return parseFloat(l) + parseFloat(r);
      });
    }
    return eq;
  } // main recursive fx + PEMDAS
  static strContain(haystack: any, needle: any) {
    return haystack.indexOf(needle) > -1;
  } // custom true/false contains
}
