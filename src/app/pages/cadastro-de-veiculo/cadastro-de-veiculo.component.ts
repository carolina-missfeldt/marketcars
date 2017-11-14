import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { CarroModel } from './../../models/carro-model';
import { CadastroService } from '../../services/cadastro.service';
import { ListagemService } from '../../services/listagem.service';


@Component({
  selector: 'app-cadastro-de-veiculo',
  templateUrl: './cadastro-de-veiculo.component.html'
})
export class CadastroDeVeiculoComponent implements OnInit {
  lastIdLista: Array<any>;
  title: string = 'Cadastre seu veículo';
  // public novoCarro: CarroModel = new CarroModel({});
  listaDeMontadoras: Array<any>;
  errorMessage: String;
  carroNome: String;
  indice: number;
  dataAtual = new Date();
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
  montadoras: Observable<any>
  constructor(public cadastroService: CadastroService, public listagemService: ListagemService) { }

  ngOnInit() {
    this.montadoras = this.cadastroService.getMontadoras();

  }

  selectMontadoras() {
    
  }


  addCarro() {


  }

  cancelar() {
    this.resetNovoCarro();
  }

  resetNovoCarro() {


  }


  randomCar() {
    this.randomImg = Math.floor(Math.random() * this.listaDeImagens.length);
    this.img = this.listaDeImagens[this.randomImg];
  }


}
