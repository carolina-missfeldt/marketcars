import { Component, OnInit, Input } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';
import { CarroModel } from './../../models/carro-model';
import { ListagemService } from '../../services/listagem.service';



@Component({
  selector: 'app-lista-de-veiculos',
  templateUrl: './lista-de-veiculos.component.html'
})
export class ListaDeVeiculosComponent implements OnInit {

  title: string = 'Veículos disponíveis';
  listaDeCarros: CarroModel[];


  constructor(public listagemService: ListagemService) { }

  ngOnInit() {
    this.montaLista();
  }

  montaLista() {
    this.listagemService.getVeiculos()
    .subscribe(veiculos => this.listaDeCarros = veiculos)

  }


}

