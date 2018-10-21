import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirikComponent } from './mirik.component';

describe('MirikComponent', () => {
  let component: MirikComponent;
  let fixture: ComponentFixture<MirikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
