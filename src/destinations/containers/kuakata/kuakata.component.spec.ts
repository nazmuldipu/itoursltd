import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuakataComponent } from './kuakata.component';

describe('KuakataComponent', () => {
  let component: KuakataComponent;
  let fixture: ComponentFixture<KuakataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuakataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuakataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
