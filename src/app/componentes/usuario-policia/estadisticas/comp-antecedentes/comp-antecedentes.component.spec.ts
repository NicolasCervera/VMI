import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAntecedentesComponent } from './comp-antecedentes.component';

describe('CompAntecedentesComponent', () => {
  let component: CompAntecedentesComponent;
  let fixture: ComponentFixture<CompAntecedentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompAntecedentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompAntecedentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
