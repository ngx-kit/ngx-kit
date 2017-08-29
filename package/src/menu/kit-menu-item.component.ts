import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  QueryList,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { StylerComponent } from '@ngx-kit/styler';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import { KitComponentStyle } from '../core/meta/component';
import { kitMenuItemStyle } from '../core/meta/tokens';
import { KitMenuSubComponent } from './kit-menu-sub.component';
import { KitMenuComponent } from './kit-menu.component';

@Component({
  selector: 'kit-menu-item,[kitMenuItem]',
  template: `
    <ng-content></ng-content>
  `,
  viewProviders: [
    StylerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitMenuItemComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit {
  @Input() activeExact = true;

  @Input() disabled: boolean;

  @ContentChildren(forwardRef(() => KitMenuItemComponent), {descendants: true})
  items: QueryList<KitMenuItemComponent>;

  @Input() kitMenuItem: any;

  @ContentChildren(RouterLink, {descendants: true}) links: QueryList<RouterLink>;

  @ContentChildren(RouterLinkWithHref, {descendants: true}) linksWithHrefs: QueryList<RouterLinkWithHref>;

  @ContentChildren(forwardRef(() => KitMenuSubComponent), {descendants: false})
  subs: QueryList<KitMenuSubComponent>;

  private _hover = false;

  private subscription: Subscription;

  constructor(private styler: StylerComponent,
              @Inject(kitMenuItemStyle) private style: KitComponentStyle,
              @Inject(forwardRef(() => KitMenuComponent)) private menu: KitMenuComponent,
              @Inject(forwardRef(() => KitMenuSubComponent)) @Optional() private sub: KitMenuSubComponent,
              private el: ElementRef,
              private cdr: ChangeDetectorRef,
              private router: Router) {
    this.styler.classPrefix = 'kit-menu-item';
    this.styler.register(this.style);
    this.subscription = router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        this.checkRouterLink();
      }
    });
  }

  get hover() {
    return this._hover || this.hasHoveredChildren();
  }

  get nativeEl() {
    return this.el.nativeElement;
  }

  ngAfterContentInit() {
    this.applyMenuState();
    this.styler.host.applyState({
      root: !this.sub,
      hasSubs: this.subs && this.subs.length > 0,
    });
    this.links.changes.subscribe(_ => this.checkRouterLink());
    this.linksWithHrefs.changes.subscribe(_ => this.checkRouterLink());
    this.checkRouterLink();
  }

  ngOnChanges() {
    this.styler.host.applyState({
      disabled: this.disabled,
    });
    this.checkRouterLink();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    // hover handler
    this.menu.checkLeave$
        .debounceTime(200)
        .subscribe(() => {
          if (!this.hover) {
            this.styler.host.applyState({hover: false});
            this.closeSub();
          }
        });
    // handle menu changes
    this.menu.changes$.subscribe(() => {
      this.applyMenuState();
    });
  }

  hasHoveredChildren(): boolean {
    if (this.subs && this.subs.first) {
      return this.subs.first.hover;
    } else {
      return false;
    }
  }

  @HostListener('mouseenter')
  mouseenter() {
    this._hover = true;
    this.styler.host.applyState({hover: true});
    this.openSub();
  }

  @HostListener('mouseleave')
  mouseleave() {
    this._hover = false;
    this.menu.checkLeave$.next();
  }

  private applyMenuState() {
    this.styler.host.applyState({
      menuDirection: this.menu.direction,
      inverted: this.menu.inverted,
    });
  }

  private checkRouterLink() {
    if (this.router &&
        (this.links || this.linksWithHrefs)) {
      const isActive = this.hasActiveLinks();
      this.styler.host.applyState({active: isActive});
    }
  }

  private closeSub() {
    if (this.subs && this.subs.first) {
      this.subs.first.close();
      this.cdr.markForCheck();
    }
  }

  private hasActiveLinks(): boolean {
    return this.links.some(this.isLinkActive(this.router)) ||
        this.linksWithHrefs.some(this.isLinkActive(this.router));
  }

  private isLinkActive(router: Router): (link: (RouterLink | RouterLinkWithHref)) => boolean {
    return (link: RouterLink | RouterLinkWithHref) =>
        router.isActive(link.urlTree, this.activeExact);
  }

  private openSub() {
    if (this.subs && this.subs.first && !this.disabled) {
      this.subs.first.open();
    }
  }
}
