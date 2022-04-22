import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadFootingComponent } from './spread-footing.component';

describe('SpreadFootingComponent', () => {
  let component: SpreadFootingComponent;
  let fixture: ComponentFixture<SpreadFootingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreadFootingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadFootingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
