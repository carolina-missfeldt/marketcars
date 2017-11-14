import { Component, OnInit, Input } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';
import { CarroModel } from './../../models/carro-model';
import { ListagemService } from '../../services/listagem.service';
import { CadastroService } from '../../services/cadastro.service';


@Component({
  selector: 'app-lista-de-veiculos',
  templateUrl: './lista-de-veiculos.component.html',
  styleUrls: ['./lista-de-veiculos.component.css']
})
export class ListaDeVeiculosComponent implements OnInit {

  title: string = 'Veículos disponíveis';
  listaDeCarros: CarroModel[];
  // editar: boolean = false;

  constructor(public listagemService: ListagemService, public cadastroService: CadastroService) { }

  ngOnInit() {
    this.montaLista();
    console.log(this.listaDeCarros);
  }

  montaLista() {
    this.listagemService.getVeiculos()
    .subscribe(veiculos => this.listaDeCarros = veiculos);
    console.log(`${this.listaDeCarros}`);
  }


}

