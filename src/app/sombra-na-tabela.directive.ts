import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'button',
  exportAs: 'sombraNoComponente'
})
export class SombraNaTabelaDirective {

  @HostBinding('style.boxShadow') sombra: string;
  @Input('appSombra') sombraEntrada: string;

  /*constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {

  }*/

  @HostListener('mouseover') quandoOMousePassarPorCima() {
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow',
      '10px 10px'
    );*/
    this.sombra = this.sombraEntrada;
  }

  @HostListener('mouseleave') quandoOMouseSair() {
    /*this.renderer.removeStyle(
      this.elementRef.nativeElement,
      'box-shadow'
    );*/
    this.sombra = "";
  }

}
