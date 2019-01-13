import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHeilightDirective]'
})
export class BasicDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.elementRef.nativeElement.textContent = 'Hello sid';
  }
}
