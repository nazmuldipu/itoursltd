import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarjeelingComponent } from './darjeeling.component';

describe('DarjeelingComponent', () => {
  let component: DarjeelingComponent;
  let fixture: ComponentFixture<DarjeelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarjeelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarjeelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
