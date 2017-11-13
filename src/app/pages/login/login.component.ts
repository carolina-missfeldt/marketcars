import { UsuarioModel } from './../../models/usuario-model';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  usuarioValido: UsuarioModel;

  public sucess: boolean;
  public error: boolean;
  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit() {
    this.loginService.login()
    .subscribe(login => this.usuarioValido = login)
    console.log(`${this.usuarioValido}`)
  }



  entrar() {
      if(this.usuario.nome == '' || this.usuario.senha == ''){
        alert("Os campos desse formulario sao obrigatórios")
      }
      if(this.usuario !== this.usuarioValido){
        alert(`usuario ou senha inválidos`)
      }else {
        this.router.navigate(['/home']); 
      }

  
  }

}
