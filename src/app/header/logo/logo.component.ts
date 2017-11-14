import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: '<div class="logo"><img src="{{ logo }}" alt="marketcars"></div>'
})
export class LogoComponent  {

  logo: string = '../../assets/img/logo.png';

}
