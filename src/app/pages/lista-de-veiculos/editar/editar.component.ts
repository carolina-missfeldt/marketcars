import { CadastroService } from './../../../services/cadastro.service';
import { Component, OnInit, Input } from '@angular/core';
import { CarroModel } from '../../../models/carro-model';
import { ListagemService } from '../../../services/listagem.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent  {

  listaDeMontadoras: Array<any>;
  title: string = 'Editar carro';
  idAtual: number;
  carroEditado: any;
  idEditar: number;
  carroAtual: Array<any>;

  constructor(public listagemService: ListagemService, public cadastroService: CadastroService, public router: ActivatedRoute, public rota: Router) {
   
  }

  // ngOnInit() {
  //   this.router.params.subscribe(params => {
  //     this.idEditar = +params['id'];
  //   });

  //   for (let k in this.carroAtual) {
  //     if (this.carroAtual[k].id == this.idEditar) {
  //       this.carroEditado = this.carroAtual[k]

  //     }
  //   }

  // }
  // salvarEdicao() {
    
  // }
}
