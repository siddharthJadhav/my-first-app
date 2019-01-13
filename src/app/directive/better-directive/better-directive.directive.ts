import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]',
})
export class BetterDirective implements OnInit {

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    console.log('event Data: ');
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
  }

}
