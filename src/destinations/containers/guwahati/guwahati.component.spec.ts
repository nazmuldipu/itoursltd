import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuwahatiComponent } from './guwahati.component';

describe('GuwahatiComponent', () => {
  let component: GuwahatiComponent;
  let fixture: ComponentFixture<GuwahatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuwahatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuwahatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
