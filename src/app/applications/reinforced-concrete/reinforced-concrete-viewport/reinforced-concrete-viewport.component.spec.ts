import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinforcedConcreteViewportComponent } from './reinforced-concrete-viewport.component';

describe('ReinforcedConcreteViewportComponent', () => {
  let component: ReinforcedConcreteViewportComponent;
  let fixture: ComponentFixture<ReinforcedConcreteViewportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinforcedConcreteViewportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinforcedConcreteViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
