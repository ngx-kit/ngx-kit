import { Injectable } from '@angular/core';
import { mathParse } from '../math-parser';
import { KitInputMiddleware } from '../meta';

@Injectable()
export class KitMathParseMiddleware implements KitInputMiddleware {
  enabled = false;

  transform(value: any): number {
    return mathParse(value || '');
  }
}
