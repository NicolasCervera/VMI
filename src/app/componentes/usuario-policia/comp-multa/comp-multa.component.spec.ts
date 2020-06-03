import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMultaComponent } from './comp-multa.component';

describe('CompMultaComponent', () => {
  let component: CompMultaComponent;
  let fixture: ComponentFixture<CompMultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompMultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
