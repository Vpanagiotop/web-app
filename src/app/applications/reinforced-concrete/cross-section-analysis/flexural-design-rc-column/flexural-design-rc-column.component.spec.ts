import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexuralDesignRcColumnComponent } from './flexural-design-rc-column.component';

describe('FlexuralDesignRcColumnComponent', () => {
  let component: FlexuralDesignRcColumnComponent;
  let fixture: ComponentFixture<FlexuralDesignRcColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexuralDesignRcColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexuralDesignRcColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
