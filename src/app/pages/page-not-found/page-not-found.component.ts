import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="not-found col-12">
    <img src="{{ imgNotFound }}" class="col-6" alt="marketcars">
    <p>Esta página não existe, volte para a <a [routerLink]="['/home']">home</a></p>
  </div>
  `
})
export class PageNotFoundComponent implements OnInit {

  imgNotFound: string = '../../assets/img/ops2.png'

  constructor() { }

  ngOnInit() {
  }

}
