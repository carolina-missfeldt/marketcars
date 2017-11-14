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

  listaDeImagens: Array<any> = [
    'http://bit.ly/2luj8Kn',
    'http://bit.ly/2xyPm8U',
    'http://bit.ly/2gXi54x',
    'http://bit.ly/2zj2GCY',
    'http://bit.ly/2yWWQGS',
    'http://bit.ly/2A0JkQ2',
    'http://bit.ly/2yYJ5Fb',
    'http://bit.ly/2xAy1g9'
  ];

  img: string;
  randomImg: any;

  constructor(public listagemService: ListagemService) { }

  ngOnInit() {
    this.randomCar();
    this.carro.imagem = this.img;
  }

  confirm() {
}
randomCar() {
  this.randomImg = Math.floor(Math.random() * this.listaDeImagens.length);
  this.img = this.listaDeImagens[this.randomImg];
}


}
