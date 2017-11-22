import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { CarroModel } from './../../models/carro-model';
import { CadastroService } from '../../services/cadastro.service';
import { ListagemService } from '../../services/listagem.service';
import { ErrorMsg } from '../../app.error';
import swal from 'sweetalert2'



@Component({
  selector: 'app-cadastro-de-veiculo',
  templateUrl: './cadastro-de-veiculo.component.html'
})
export class CadastroDeVeiculoComponent implements OnInit {
  lastIdLista: Array<any>;
  title: string = 'Cadastre seu veículo';
  // public novoCarro: CarroModel = new CarroModel({});
  public novoCarro: CarroModel = new CarroModel();
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
    this.resetNovoCarro();
    this.montadoras = this.cadastroService.getMontadoras();
    

  }


  addCarro(novoCarro) {
    this.novoCarro.dataCadastro = this.dataAtual;
    this.cadastroService.cadastrar(this.novoCarro)
    .subscribe( response => {
      swal({
        title:'Cadastro realizado com sucesso!',
        type: 'success',
        customClass: 'modal'
      });
      this.resetNovoCarro();
    }, error => {
      swal('Não foi possível cadastrar');
    });
  }

  cancelar() {
    this.resetNovoCarro();
  }

  resetNovoCarro() {
    this.randomCar();
    this.novoCarro = {
      montadora: undefined,
      anoFabricacao: undefined,
      condicao: undefined,
      dataCadastro: undefined,
      id: null,
      imagem: this.img,
      nome: undefined,
      preco: undefined,
      unicoDono: undefined
    };
    this.listagemService.getVeiculos().subscribe(response => {
      const indiceUltimoCarro = response.length - 1;
      this.novoCarro.id = response[indiceUltimoCarro].id + 1;

      console.log(`ID do novo carro: ${this.novoCarro.id}`);

    }, error => {

    });

  }
  randomCar() {
    this.randomImg = Math.floor(Math.random() * this.listaDeImagens.length);
    this.img = this.listaDeImagens[this.randomImg];
  }


}
