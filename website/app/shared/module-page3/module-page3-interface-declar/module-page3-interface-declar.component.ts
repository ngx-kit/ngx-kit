import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DocGen } from '@ngx-kit/docgen';

@Component({
  selector: 'app-module-page3-interface-declar',
  templateUrl: './module-page3-interface-declar.component.html',
  styleUrls: ['./module-page3-interface-declar.component.scss'],
})
export class ModulePage3InterfaceDeclarComponent implements OnInit, OnChanges {
  @Input() declar: DocGen.InterfaceDeclar;

  publicMembers: DocGen.Signature[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.publicMembers = this.declar && this.declar.members
      ? this.declar.members
        .filter(member => {
          // Hide internal
          if (member.isInternal) {
            return false;
          }
          return true;
        })
      : [];
  }
}
