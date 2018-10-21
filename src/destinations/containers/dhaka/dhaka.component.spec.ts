import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhakaComponent } from './dhaka.component';

describe('DhakaComponent', () => {
  let component: DhakaComponent;
  let fixture: ComponentFixture<DhakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
