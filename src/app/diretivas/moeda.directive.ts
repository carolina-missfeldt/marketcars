import { Observable } from 'rxjs';
import { Directive, HostListener, Input, Optional, ElementRef, OnInit, HostBinding } from '@angular/core';
import { NgModel, Validator } from '@angular/forms';

@Directive({
  selector: '[preco]'
})
export class MoedaDirective {
  @Input() valorDigitado: string;
  valorEmBranco;
  constructor( @Optional() private model: NgModel,
    private evento: ElementRef) { }


  @HostListener('mouseenter')
  mouseEnter() {
    this.valorDigitado= undefined;
    this.model.valueAccessor.writeValue('');
  }

  @HostListener('keyup')
  onKeyup() {
    const valorValido = this.checaValor(this.valorDigitado);
    this.model.viewToModelUpdate(valorValido);

  }

  @HostListener('mouseout')
  mouseOut() {
    const valorValido = this.checaValor(this.valorDigitado);
    this.model.viewToModelUpdate(valorValido);

  }



  checaValor(valorDigitado) {
    valorDigitado = this.model.value;
    if (isNaN(valorDigitado)) {
      console.log(`o valor digitado não é um número: ${valorDigitado}`);
      this.model.valueAccessor.writeValue('formato inválido. Ex: digite: 1000.00 para 1000,00');
      return valorDigitado = undefined;

    } else {

        console.log(`o valor digitado é um número: ${valorDigitado}`);

      return valorDigitado;
    }
  }


}
