import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { isArray } from '../util/is-array';
import { isObject } from '../util/is-object';
import { isString } from '../util/is-string';

@Directive({
  selector: '[kitClass]',
})
export class KitClassDirective implements OnChanges {
  @Input() kitClass: any;

  private current = new Set<string>();

  constructor(private renderer: Renderer2,
              private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['kitClass']) {
      const classes = new Set<string>();
      if (isString(this.kitClass)) {
        classes.add(this.kitClass);
      } else if (isArray(this.kitClass)) {
        this.kitClass.forEach((v: string | any) => {
          if (isString(v)) {
            classes.add(v);
          } else if (isObject(v)) {
            Object.keys(v).forEach((k: string) => {
              classes.add(`${k}-${v[k]}`);
            });
            console.log('kitClass obj processing');
          } else {
            throw new Error(`[kitClass] item should be a string or an object`);
          }
        });
      } else {
        throw new Error(`[kitClass] must be a string or an array`);
      }
      this.update(classes);
    }
  }

  update(classes: Set<string>) {
    this.current.forEach(c => {
      if (!classes.has(c)) {
        this.renderer.removeClass(this.el.nativeElement, c);
      }
    });
    classes.forEach(c => {
      this.renderer.addClass(this.el.nativeElement, c);
    });
    this.current = classes;
  }
}
