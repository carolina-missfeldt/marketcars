import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { MontadorasModel } from '../models/montadoras-model';
import { CarroModel } from '../models/carro-model';


@Injectable()
export class CadastroService {


  private URL_MONTADORAS: string = "http://localhost:8080/marketcars/montadoras";
  private URL_NOVO: string = 'http://localhost:8080/marketcars/veiculos/novo';
  public listaDeMontadoras: MontadorasModel = new MontadorasModel();
  

  constructor(private http: Http, public loginService: LoginService) { }

  

  getMontadoras(): Observable<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.URL_MONTADORAS, options)
  }

  cadastrar()  {




  }

}
