import { Injectable, NgZone } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
//services
import { ErrorMsg } from '../app.error';
import { URL_API } from './../app.api';
import { CarroModel } from '../models/carro-model';


@Injectable()
export class ListagemService {

  idAtual: number;
  id: number;
  edicaoConfirmada: any = {}
  listaDeCarros: CarroModel[];
  constructor(private http: Http, private zone: NgZone) { }

  getVeiculos(search?: string): Observable <CarroModel[]> {
    return this.http.get(`${URL_API}/veiculos`, {params: {q: search}})
    .map(response=> response.json())
    .catch(ErrorMsg.handleError)
  }

  getVeiculo(carroId: number): Observable<CarroModel> {
    return this.http.get(`${URL_API}/veiculos/${carroId}`)
      .map(response => response.json())
      .catch(ErrorMsg.handleError);
  }

  deletVeiculo(): Observable<Response> {
    return this.http.delete(`${URL_API}/veiculos/${this.id}`)
  }

  editVeiculo(carro): Observable<CarroModel> {
    console.log('carro editado:', carro.id);

    var options = {
      "headers": new Headers({
        'Content-Type': 'application/json'
      })
    }

    return this.http.put(`${URL_API}/veiculos/${carro.id}`, JSON.stringify(carro), options)
      .map(response=> response.json())
      .catch(ErrorMsg.handleError)
  }

  reloadPage() { // click handler or similar
    window.location.reload();
  }

}
