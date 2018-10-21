import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaisalmerComponent } from './jaisalmer.component';

describe('JaisalmerComponent', () => {
  let component: JaisalmerComponent;
  let fixture: ComponentFixture<JaisalmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaisalmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaisalmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
