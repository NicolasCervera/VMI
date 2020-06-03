import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDenunciaComponent } from './comp-denuncia.component';

describe('CompDenunciaComponent', () => {
  let component: CompDenunciaComponent;
  let fixture: ComponentFixture<CompDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
