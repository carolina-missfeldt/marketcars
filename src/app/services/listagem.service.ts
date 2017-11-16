import { Injectable, NgZone } from '@angular/core';
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
  listaDeCarros: CarroModel[];
  constructor(private http: Http, private zone: NgZone) { }

  getVeiculos(): Observable <CarroModel[]> {
    return this.http.get(`${URL_API}/veiculos`)
    .map(response=> response.json())
    .catch(ErrorMsg.handleError)
  }

  deletVeiculo(): Observable<Response> {
    return this.http.delete(`${URL_API}/veiculos/${this.idAtual}`)
  }

  editVeiculo(){

  }


  reloadPage() { // click handler or similar
    window.location.reload();
  }
}
