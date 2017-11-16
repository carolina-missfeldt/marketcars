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
  carro: CarroModel = new CarroModel();
  idEditar: number;
  montadoras: Observable<any>
  carroAtual: CarroModel;

  constructor(public listagemService: ListagemService,
     public cadastroService: CadastroService,
      public router: ActivatedRoute, 
      public rota: Router) {

  }

  ngOnInit() {
    this.montadoras = this.cadastroService.getMontadoras();
   

  }
      

  salvarEdicao(carroAtual){
    // console.log(this.listagemService.edicaoConfirm)
    this.listagemService.editVeiculo(carroAtual)
      .subscribe(
      dados => 
        this.rota.navigate(['/lista-de-veiculos']));
      
    }
}
