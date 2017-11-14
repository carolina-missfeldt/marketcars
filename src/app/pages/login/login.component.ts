import { UsuarioModel } from './../../models/usuario-model';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  usuarioValido:UsuarioModel;

  public error: boolean;
  public campoVazio: boolean;
  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit() {
    
    this.loginService.login()
    .subscribe(login => 
      setTimeout(() =>{ this.usuarioValido = login }, 4000))
  }



  entrar() {
      
      if(this.usuario.nome == null || this.usuario.senha == null){
        this.campoVazio = true;
      }
      if(this.usuario.senha !== this.usuarioValido.senha || this.usuario.nome !== this.usuarioValido.nome){
        this.error = true;
      }else {
        this.router.navigate(['/home']);
      }

  
  }

}
