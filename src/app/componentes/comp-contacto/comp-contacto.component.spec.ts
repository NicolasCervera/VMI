import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompContactoComponent } from './comp-contacto.component';

describe('CompContactoComponent', () => {
  let component: CompContactoComponent;
  let fixture: ComponentFixture<CompContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
