import { EditarComponent } from './pages/lista-de-veiculos/editar/editar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroDeVeiculoComponent } from './pages/cadastro-de-veiculo/cadastro-de-veiculo.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaDeVeiculosComponent } from './pages/lista-de-veiculos/lista-de-veiculos.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  
    {
      path:'',
      component:LoginComponent
    },
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'lista-de-veiculos',
      component:ListaDeVeiculosComponent
    },
    {
      path:'cadastro-de-veiculo',
      component:CadastroDeVeiculoComponent
    },
    {
      path: 'editar/:id',
      component: EditarComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
