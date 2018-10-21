import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhagrachariComponent } from './khagrachari.component';

describe('KhagrachariComponent', () => {
  let component: KhagrachariComponent;
  let fixture: ComponentFixture<KhagrachariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhagrachariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhagrachariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
