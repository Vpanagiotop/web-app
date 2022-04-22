import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripFoundationComponent } from './strip-foundation.component';

describe('StripFoundationComponent', () => {
  let component: StripFoundationComponent;
  let fixture: ComponentFixture<StripFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripFoundationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
