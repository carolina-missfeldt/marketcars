import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeVeiculoComponent } from './cadastro-de-veiculo.component';

describe('CadastroDeVeiculoComponent', () => {
  let component: CadastroDeVeiculoComponent;
  let fixture: ComponentFixture<CadastroDeVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDeVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDeVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
