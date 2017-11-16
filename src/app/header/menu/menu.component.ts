import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';


@Component({
  selector: 'app-menu',
  template: `
    <p-sidebar [(visible)]="display" position="right">
        <p-slideMenu  [model]="items"  [style]="estilos()"></p-slideMenu>
    </p-sidebar>
    <button pButton type="button" (click)="display = true" icon="fa fa-bars" position="right" style="position: fixed; right: 0"></button>
  `
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  private estilos(): Object {
    const valores = {
      'background-image': 'none',
      'border': 'none',
      'font-size': '16.9px',
      'height': '300px'
    }
    return valores;
  }
  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'fa fa-home', routerLink: '/home' },
      { label: 'Veiculos disponíveis', icon: 'fa fa-list-alt', routerLink: '/lista-de-veiculos'},
      { label: 'Novo veiculo', icon: 'fa fa-car', routerLink: '/cadastro-de-veiculo' },
      { label: 'Logout', icon: 'fa fa-sign-out', routerLink: '/' }
    ];
  }


}


