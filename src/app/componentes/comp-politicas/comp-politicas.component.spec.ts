import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPoliticasComponent } from './comp-politicas.component';

describe('CompPoliticasComponent', () => {
  let component: CompPoliticasComponent;
  let fixture: ComponentFixture<CompPoliticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompPoliticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPoliticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
