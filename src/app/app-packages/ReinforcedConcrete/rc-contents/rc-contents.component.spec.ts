import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCContentsComponent } from './rc-contents.component';

describe('RCContentsComponent', () => {
  let component: RCContentsComponent;
  let fixture: ComponentFixture<RCContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RCContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RCContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
