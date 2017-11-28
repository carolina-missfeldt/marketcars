import { Component, OnInit, Input } from '@angular/core';
import { CarroModel } from './../../models/carro-model';
import { ListagemService } from '../../services/listagem.service';
import {trigger, state, style, transition, animate} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'



@Component({
  selector: 'app-lista-de-veiculos',
  templateUrl: './lista-de-veiculos.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('* => *', animate('250ms 0s ease-in'))
    ])
  ]
})
export class ListaDeVeiculosComponent implements OnInit {

  searchBarState = 'hidden';
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

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }


}

