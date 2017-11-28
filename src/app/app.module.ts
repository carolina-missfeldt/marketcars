import { FormsModule, ReactiveFormsModule, Validator } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {LOCALE_ID} from '@angular/core';

//modulos do prime ng
import {SidebarModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/primeng';
import {SlideMenuModule,MenuItem} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
// componentes do projeto
import { AppComponent } from './app.component';
import { MenuComponent } from './header/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroDeVeiculoComponent } from './pages/cadastro-de-veiculo/cadastro-de-veiculo.component';
import { ListaDeVeiculosComponent } from './pages/lista-de-veiculos/lista-de-veiculos.component';
import { LogoComponent } from './header/logo/logo.component';
import { CarroComponent } from './pages/lista-de-veiculos/carro/carro.component';
import { EditarComponent } from './pages/lista-de-veiculos/editar/editar.component';
//serviços do projeto
import { LoginService } from './services/login.service';
import { ListagemService } from './services/listagem.service';
import { CadastroService } from './services/cadastro.service';
import { DataDirective } from './diretivas/data.directive';
import { MoedaDirective } from './diretivas/moeda.directive';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    CadastroDeVeiculoComponent,
    ListaDeVeiculosComponent,
    LogoComponent,
    CarroComponent,
    EditarComponent,
    DataDirective,
    MoedaDirective,
    FooterComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    BrowserAnimationsModule,
    ButtonModule,
    SlideMenuModule,
    PanelModule,
    HttpModule,
    FormsModule,
    ConfirmDialogModule,
    InputMaskModule,
    ReactiveFormsModule,
    RadioButtonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    LoginService,
    ListagemService,
    CadastroService,
    ConfirmationService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
