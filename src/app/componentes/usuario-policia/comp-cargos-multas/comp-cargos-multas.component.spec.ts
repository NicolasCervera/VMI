import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCargosMultasComponent } from './comp-cargos-multas.component';

describe('CompCargosMultasComponent', () => {
  let component: CompCargosMultasComponent;
  let fixture: ComponentFixture<CompCargosMultasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompCargosMultasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCargosMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
