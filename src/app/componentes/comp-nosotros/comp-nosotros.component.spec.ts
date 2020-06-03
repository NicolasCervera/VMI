import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNosotrosComponent } from './comp-nosotros.component';

describe('CompNosotrosComponent', () => {
  let component: CompNosotrosComponent;
  let fixture: ComponentFixture<CompNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
