import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMapaEstacionamientosComponent } from './comp-mapa-estacionamientos.component';

describe('CompMapaEstacionamientosComponent', () => {
  let component: CompMapaEstacionamientosComponent;
  let fixture: ComponentFixture<CompMapaEstacionamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompMapaEstacionamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMapaEstacionamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
