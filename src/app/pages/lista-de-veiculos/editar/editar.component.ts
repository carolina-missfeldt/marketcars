import { CadastroService } from './../../../services/cadastro.service';
import { Component, OnInit, Input } from '@angular/core';
import { CarroModel } from '../../../models/carro-model';
import { ListagemService } from '../../../services/listagem.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent {
 
  title: string = 'Editar carro';

  carroId: number;
  carroAtual: CarroModel;
  montadoras: Observable<any>

  constructor(public listagemService: ListagemService,
     public cadastroService: CadastroService,
      public activatedRoute: ActivatedRoute, 
      public router: Router) {

  }

  ngOnInit() {
    this.montadoras = this.cadastroService.getMontadoras();
    this.carroId = this.activatedRoute.snapshot.params['id'];
    this.carroAtual = new CarroModel();
  }
      
  salvarEdicao(carroAtual){
    this.listagemService.editVeiculo(carroAtual).subscribe(dados => {
      this.router.navigate(['/lista-de-veiculos'])
    });
  }

}
