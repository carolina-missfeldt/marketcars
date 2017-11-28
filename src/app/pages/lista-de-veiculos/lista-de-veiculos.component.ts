import { Component, OnInit, Input } from '@angular/core';
import { CarroModel } from './../../models/carro-model';
import { ListagemService } from '../../services/listagem.service';
import {trigger, state, style, transition, animate} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
import {Observable} from 'rxjs/Observable'



@Component({
  selector: 'app-lista-de-veiculos',
  templateUrl: './lista-de-veiculos.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "width": "0"
      })),
      state('visible', style({
        opacity: 1,
        "width":"100%",
      })),
      transition('* => *', animate('250ms 0s ease-in'))
    ])
  ]
})
export class ListaDeVeiculosComponent implements OnInit {

  searchForm: FormGroup
  searchControl: FormControl

  searchBarState = 'hidden';
  title: string = 'Veículos disponíveis';
  listaDeCarros: CarroModel[];


  constructor(public listagemService: ListagemService, private fb: FormBuilder) { }

  ngOnInit() {

    this.montaLista();

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
  }


    // this.searchControl.valueChanges
    // .debounceTime(500)
    // .distinctUntilChanged()
    // .switchMap(searchTerm =>
    //   this.listagemService
    //     .getVeiculos(searchTerm)
    //     .catch(error=>Observable.from([])))
    // .subscribe(veiculos => this.listaDeCarros = veiculos)
    //   this.montaLista()
    //   }

  montaLista() {
    this.listagemService.getVeiculos()
    .subscribe(veiculos => this.listaDeCarros = veiculos)

  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }


}

