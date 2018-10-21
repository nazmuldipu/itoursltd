import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimlaComponent } from './simla.component';

describe('SimlaComponent', () => {
  let component: SimlaComponent;
  let fixture: ComponentFixture<SimlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
