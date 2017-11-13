import { Injectable, Input } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//services
import { LoginService } from './login.service';
import { CarroComponent } from './../pages/lista-de-veiculos/carro/carro.component';


@Injectable()
export class ListagemService {

  private URL_VEICULOS: string = "http://localhost:8080/marketcars/veiculos";
  private URL_VEICULODELET: string = "http://localhost:8080/marketcars/veiculos/delete/";
  private URL_EDIT: string = "http://localhost:8080/marketcars/veiculos/edit/";
  public listaDeCarros: Array<any> = [];
  idAtual: number;
  id: number;
  edicaoConfirm: any = {}

  constructor(private http: Http, public loginService: LoginService) { }

  getVeiculos() {

  }

  deletVeiculo()  {

  }

  editVeiculo(){

  }


}
