import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformvalidationComponent } from './reactiveformvalidation.component';

describe('ReactiveformvalidationComponent', () => {
  let component: ReactiveformvalidationComponent;
  let fixture: ComponentFixture<ReactiveformvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveformvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
