import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { UiFileSelect } from '../meta';
import { UiFileHolderDirective } from '../ui-file-holder/ui-file-holder.directive';

@Component({
  // tslint:disable-next-line
  selector: 'input[type="file"][uiFile]',
  template: '',
  styleUrls: ['./ui-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'uiFile',
})
export class UiFileComponent {
  @Output() select = new EventEmitter<UiFileSelect[]>();

  @Output() error = new EventEmitter<string>();

  constructor(
    private holder: UiFileHolderDirective,
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

  private loadFile(file: File): Observable<UiFileSelect> {
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
