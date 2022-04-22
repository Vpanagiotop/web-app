import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizationViewportComponent } from './optimization-viewport.component';

describe('OptimizationViewportComponent', () => {
  let component: OptimizationViewportComponent;
  let fixture: ComponentFixture<OptimizationViewportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimizationViewportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimizationViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
