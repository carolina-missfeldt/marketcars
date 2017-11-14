import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//services
import { ErrorMsg } from '../app.error';
import { URL_API } from './../app.api';
import { CarroModel } from '../models/carro-model';


@Injectable()
export class ListagemService {

  idAtual: number;
  id: number;
  edicaoConfirm: any = {}

  constructor(private http: Http) { }

  getVeiculos(): Observable <CarroModel[]> {
    return this.http.get(`${URL_API}/veiculos`)
    .map(response=> response.json())
    .catch(ErrorMsg.handleError)
  }

  deletVeiculo()  {

  }

  editVeiculo(){

  }


}
