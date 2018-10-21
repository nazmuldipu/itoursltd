import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoxBazarComponent } from './cox-bazar.component';

describe('CoxBazarComponent', () => {
  let component: CoxBazarComponent;
  let fixture: ComponentFixture<CoxBazarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoxBazarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoxBazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
