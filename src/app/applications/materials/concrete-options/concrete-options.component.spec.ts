import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteOptionsComponent } from './concrete-options.component';

describe('ConcreteOptionsComponent', () => {
  let component: ConcreteOptionsComponent;
  let fixture: ComponentFixture<ConcreteOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcreteOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcreteOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
