import { Directive, HostListener, Input, Optional, ElementRef, OnInit, HostBinding } from '@angular/core';
import { NgModel, Validator } from '@angular/forms';

@Directive({
  selector: '[dataConvert]'
})
export class DataDirective {
  @Input() ano: number;
  constructor( @Optional() private model: NgModel,
    private evento: ElementRef) { }

  @HostListener('mouseenter')
  mouseEnter() {
    this.ano = undefined;
    

  }

  @HostListener('focusout')
  focusout() {
    const anoValido = this.checaData(this.model.value);
    
    this.model.viewToModelUpdate(anoValido);
    // console.log('anoValido no focusOut: ' + anoValido);
    


  }
  @HostListener('mouseout')
  mouseOut() {
    const anoValido = this.checaData(this.model.value);
    this.model.viewToModelUpdate(anoValido);
    // console.log('anoValido no mouseOut: ' + anoValido);
  }

  checaData(ano) {
    const maxDate = new Date().getFullYear().toString();
    if (this.model.value > maxDate || this.model.value < '1900') {
      this.model.valueAccessor.writeValue(`Digite um ano entre 1900 e ${maxDate}`);
    } else {
      return this.model.value;

    }

  }
}
