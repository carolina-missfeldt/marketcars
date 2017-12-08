
import { Component, OnInit, Input, NgZone } from '@angular/core';
import { NgClass } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { ConfirmationService } from 'primeng/primeng';
import  swal  from 'sweetalert2';

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

  listaDeCarros: CarroModel[];
  constructor(public listagemService: ListagemService) { }

  ngOnInit() {

  }

  apagarCarro(carro) {
    this.listagemService.id = this.carro.id;
    swal({
      title: 'Deseja excluir este carro?',
      text: "Essa ação não é reversível",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0081bd',
      cancelButtonColor: '#c0392b',
      confirmButtonText: 'Sim',
      customClass: 'modal'
    }).then((valor) => {
    
      if(valor.value){
        this.listagemService.deletVeiculo()
          .subscribe(veiculos => {
            swal({
              type: 'success',
              title: 'Deletado',
              text: `item ${this.carro.nome}`,
              customClass: 'modal'
            })
            this.listagemService.reloadPage()
          });
          
        }
        }, (dismiss) => {
          if (dismiss === 'cancel') {
            swal({
              type: 'info',
              title: 'Cancelado',
              customClass: 'modal'
            })
          }
    });
  }

}
