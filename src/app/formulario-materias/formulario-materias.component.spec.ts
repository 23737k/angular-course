import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMateriasComponent } from './formulario-materias.component';

describe('FormularioMateriasComponent', () => {
  let component: FormularioMateriasComponent;
  let fixture: ComponentFixture<FormularioMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioMateriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
