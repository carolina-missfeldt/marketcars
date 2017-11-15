import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { CarroModel } from '../models/carro-model';
import { URL_API } from './../app.api';
import { ErrorMsg } from '../app.error';


@Injectable()
export class CadastroService {


  constructor(private http: Http, public loginService: LoginService) { }

  

  getMontadoras(): Observable<any> {
    return this.http.get(`${URL_API}/montadoras`)
    .map(response => response.json())
    .catch(ErrorMsg.handleError)
  }

  cadastrar(novoCarro: CarroModel): Observable<CarroModel>  {
    var headers = new Headers();
    headers.append("Content-Type", 'application/json');

    return this.http.post(`${URL_API}/veiculos`, JSON.stringify(novoCarro), {
      "headers": headers
    })
    .map(response => response.json())
    .catch(ErrorMsg.handleError)
  }

}
