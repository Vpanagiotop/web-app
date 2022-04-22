import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexuralDesignRCBeamComponent } from './flexural-design-rc-beam.component';

describe('FlexuralDesignRCBeamComponent', () => {
  let component: FlexuralDesignRCBeamComponent;
  let fixture: ComponentFixture<FlexuralDesignRCBeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexuralDesignRCBeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexuralDesignRCBeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
