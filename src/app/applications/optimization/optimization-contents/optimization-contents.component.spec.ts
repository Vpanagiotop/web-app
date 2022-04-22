import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizationContentsComponent } from './optimization-contents.component';

describe('OptimizationContentsComponent', () => {
  let component: OptimizationContentsComponent;
  let fixture: ComponentFixture<OptimizationContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimizationContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimizationContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
