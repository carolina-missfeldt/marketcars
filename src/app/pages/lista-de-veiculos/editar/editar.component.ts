import { CadastroService } from './../../../services/cadastro.service';
import { Component, OnInit, Input } from '@angular/core';
import { CarroModel } from '../../../models/carro-model';
import { ListagemService } from '../../../services/listagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent {

 
  title: string = 'Editar carro';
  idAtual: number;
  carro: Object;
  idEditar: number;
  montadoras: Observable<any>

  constructor(public listagemService: ListagemService, public cadastroService: CadastroService, public router: ActivatedRoute, public rota: Router) {

  }

  ngOnInit() {
    this.montadoras = this.cadastroService.getMontadoras();
      this.carro = this.listagemService.listaDeCarros['id'];
    }

  salvarEdicao(carro) {
    this.listagemService.editVeiculo(carro).subscribe(
      data => {

        this.listagemService.getVeiculos();
        return true;
      },
      error => {
        console.error("Error saving food!");
        return Observable.throw(error);
      }
    );
  }
}
