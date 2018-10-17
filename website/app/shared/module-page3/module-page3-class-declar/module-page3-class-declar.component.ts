import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DocGen } from '@ngx-kit/docgen';

@Component({
  selector: 'app-module-page3-class-declar',
  templateUrl: './module-page3-class-declar.component.html',
  styleUrls: ['./module-page3-class-declar.component.scss'],
})
export class ModulePage3ClassDeclarComponent implements OnInit, OnChanges {
  @Input() declar: DocGen.ClassDeclar;

  publicMembers: DocGen.ClassMember[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.publicMembers = this.declar.members
      ? this.declar.members
        .filter(member => {
          // Hide internal
          if (member.isInternal) {
            return false;
          }
          // Hide private
          if (
            member.modifiers
            && member.modifiers.find(m => m === 'private' || m === 'protected')
          ) {
            return false;
          }
          // Skip angular specific
          if ([
            'ngOnInit',
            'ngDoCheck',
            'ngOnChanges',
            'ngOnDestroy',
            'ngAfterContentInit',
            'ngAfterContentChecked',
            'ngAfterViewInit',
            'ngAfterContentChecked',
          ].indexOf(member.name + '') !== -1) {
            return false;
          }
          // Skip angular directives
          if (member.decorators && member.decorators.find(decorator => {
            return !![
              '@HostListener',
              '@HostBinding',
              '@ContentChildren',
              '@ContentChild',
              '@ViewChildren',
              '@ViewChild',
            ].find(d => {
              return decorator.indexOf(d) !== -1;
            });
          })) {
            return false;
          }
          // Hide constructor
          if (this.declar.ngMeta && member.name === 'constructor') {
            return false;
          }
          return true;
        })
      : [];
  }
}
