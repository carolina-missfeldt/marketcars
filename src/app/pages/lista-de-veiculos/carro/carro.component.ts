import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { ConfirmationService } from 'primeng/primeng';
//meus arquivos
import { CarroModel } from './../../../models/carro-model';
import { ListagemService } from '../../../services/listagem.service';


@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html'
})
export class CarroComponent implements OnInit {
  @Input() carro: CarroModel;
  private cores(): Object {
    let valores = {
      'cor-carro-novo': this.carro.condicao == 'Novo',
      'cor-carro-semi-novo': this.carro.condicao == 'SemiNovo',
      'cor-carro-usado': this.carro.condicao == 'Usado'
    }
    return valores;
  }


  constructor(public listagemService: ListagemService) { }

  ngOnInit() {
   
  }

  confirm() {
}



}
