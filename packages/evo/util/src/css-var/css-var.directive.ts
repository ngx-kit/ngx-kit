import { Directive, DoCheck, ElementRef, Input, KeyValueChanges, KeyValueDiffer, KeyValueDiffers, Renderer2 } from '@angular/core';

/**
 * Binds CSS variable.
 *
 * ### Usage
 *
 * ```html
 * <div [kitCssVar]="{myBg: red}:"></div>
 * ```
 *
 * Use variable in styles:
 *
 * ```css
 * div {
 *   background: var(--myBg);
 * }
 * ```
 */
@Directive({
  selector: '[evoCssVar]',
})
export class CssVarDirective implements DoCheck {
  private _cssVar: {[key: string]: string};

  private differ !: KeyValueDiffer<string, string | number>;

  constructor(
    private differs: KeyValueDiffers,
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) {
  }

  ngDoCheck() {
    if (this.differ) {
      const changes = this.differ.diff(this._cssVar);
      if (changes) {
        this.applyChanges(changes);
      }
    }
  }

  @Input() set kitCssVar(values: {[key: string]: string}) {
    this._cssVar = values;
    if (!this.differ && values) {
      this.differ = this.differs.find(values).create();
    }
  }

  private applyChanges(changes: KeyValueChanges<string, string | number>) {
    changes.forEachRemovedItem((record) => this.remove(record.key));
    changes.forEachAddedItem((record) => this.set(record.key, record.currentValue));
    changes.forEachChangedItem((record) => this.set(record.key, record.currentValue));
  }

  private remove(name: string) {
    const styles: CSSStyleDeclaration = this.elRef.nativeElement.style;
    styles.removeProperty('--' + name);
  }

  private set(name: string, value: string | number | null) {
    const styles: CSSStyleDeclaration = this.elRef.nativeElement.style;
    styles.setProperty('--' + name, value + '');
  }
}
