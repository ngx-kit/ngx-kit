import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { EvoFileSelect } from '../meta';
import { EvoFileHolderDirective } from '../evo-file-holder/evo-file-holder.directive';

@Component({
  // tslint:disable-next-line
  selector: 'input[type="file"][evoFile]',
  template: '',
  styleUrls: ['./evo-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'uiFile',
})
export class EvoFileComponent {
  @Output() select = new EventEmitter<EvoFileSelect[]>();

  @Output() error = new EventEmitter<string>();

  constructor(
    private holder: EvoFileHolderDirective,
    private elementRef: ElementRef,
  ) {
    this.holder.file = this;
  }

  @HostListener('change', ['$event']) changeHandler(event: any) {
    if (event && event.target) {
      forkJoin(Array.from(event.target.files as FileList).map(f => this.loadFile(f)))
        .subscribe(files => {
          this.select.emit(files);
        }, error => {
          this.error.next(error);
        });
    }
  }

  emitClick() {
    this.elementRef.nativeElement.click();
  }

  reset() {
    this.elementRef.nativeElement.value = '';
  }

  private loadFile(file: File): Observable<EvoFileSelect> {
    return new Observable(observer => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        observer.next({
          file,
          data: e.target.result,
        });
        observer.complete();
      };
      reader.onerror = () => {
        observer.error('Read data error');
      };
      reader.readAsDataURL(file);
    });
  }
}
