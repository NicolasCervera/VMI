import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLeyesTransitoComponent } from './comp-leyes-transito.component';

describe('CompLeyesTransitoComponent', () => {
  let component: CompLeyesTransitoComponent;
  let fixture: ComponentFixture<CompLeyesTransitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompLeyesTransitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompLeyesTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
