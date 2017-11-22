
import { UsuarioModel } from './../../models/usuario-model';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import swal  from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  usuarioValido:UsuarioModel;

  public error: boolean;
  public campoVazio: boolean;
  constructor(public loginService: LoginService, public router: Router) {

  }

  ngOnInit() {
    this.loginService.login()
    .subscribe(login => { 
      setTimeout(() =>{ this.usuarioValido = login }, 5000);
    }, error => {
        console.log(error._body);
    })
    console.log(this.usuario);
  }

  entrar() {
      console.log(this.usuario);
      if(this.usuario.nome == null || this.usuario.senha == null){
        swal({title:'Preencha os campos', type: 'warning', customClass: 'modal'});
      }
      if(this.usuario.senha !== this.usuarioValido.senha || this.usuario.nome !== this.usuarioValido.nome){
        swal({title:'Usuário e senha não conferem', type: 'error', customClass: 'modal'});
      }else {
        this.router.navigate(['/home']);
      }
  }


}
