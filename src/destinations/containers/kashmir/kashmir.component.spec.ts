import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KashmirComponent } from './kashmir.component';

describe('KashmirComponent', () => {
  let component: KashmirComponent;
  let fixture: ComponentFixture<KashmirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KashmirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KashmirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
