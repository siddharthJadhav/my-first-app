import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]',
})
export class BetterDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('default') defaultColor: string;
  // tslint:disable-next-line:no-input-rename
  @Input('heightLight') heightLightColor: string;
  @HostBinding('style.background') bgColor: string;

  @HostListener('mouseenter') mouseEnter() {
    this.bgColor = this.heightLightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.bgColor = this.defaultColor;
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    this.bgColor = this.defaultColor;
  }

}
