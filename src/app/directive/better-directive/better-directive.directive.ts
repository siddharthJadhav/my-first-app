import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]',
})
export class BetterDirective implements OnInit {

  @HostBinding('style.background') bgColor = 'treansparent';

  @HostListener('mouseenter') mouseEnter() {
    console.log('event Data: ');
    this.bgColor = 'blue';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.bgColor = 'transparent';
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
  }

}
