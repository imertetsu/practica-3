import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMiPrimeraDirectiva]'
})
export class MiPrimeraDirectivaDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  publicOnMouseEnter(){
    this.element.nativeElement.style.backgroundColor = "yellow";
  }
  @HostListener('mouseleave')
  publicOnMouseLeave(){
    this.element.nativeElement.style.backgroundColor = "skyblue";
  }

}
