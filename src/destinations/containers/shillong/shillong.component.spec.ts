import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShillongComponent } from './shillong.component';

describe('ShillongComponent', () => {
  let component: ShillongComponent;
  let fixture: ComponentFixture<ShillongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShillongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShillongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
