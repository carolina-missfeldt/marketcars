
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UsuarioModel } from '../models/usuario-model';
import { ErrorMsg } from '../app.error';
import { URL_API } from './../app.api';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

   
  login(): Observable<UsuarioModel> {
    
    return this.http.get(`${URL_API}/login`)
    .map(response => response.json())
    .catch(ErrorMsg.handleError)
  }
}
