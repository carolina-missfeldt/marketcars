import { CadastroService } from './../../../services/cadastro.service';
import { Component, OnInit, Input } from '@angular/core';
import { CarroModel } from '../../../models/carro-model';
import { MontadorasModel } from '../../../models/montadoras-model';
import { ListagemService } from '../../../services/listagem.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  listaDeMontadoras: Array<any>;
  title: string = 'Editar carro';
  idAtual: number;
  carroEditado: any;
  idEditar: number;
  carroAtual: Array<any>;

  constructor(public listagemService: ListagemService, public cadastroService: CadastroService, public router: ActivatedRoute, public rota: Router) {
    this.carroAtual = listagemService.listaDeCarros;
  }

  ngOnInit() {
    this.selectMontadoras();
    this.router.params.subscribe(params => {
      this.idEditar = +params['id'];
    });

    for (let k in this.carroAtual) {
      if (this.carroAtual[k].id == this.idEditar) {
        this.carroEditado = this.carroAtual[k]

      }
    }

  }

  selectMontadoras() {
    this.cadastroService.getMontadoras()
      .subscribe(dados => {
        this.listaDeMontadoras = dados.json()
      }, error => {
        alert('Não foi possível carregar a lista');
      })
  }

  salvarEdicao() {
    
  }
}
