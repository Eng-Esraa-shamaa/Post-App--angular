import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationdefaultComponent } from './animationdefault.component';

describe('AnimationdefaultComponent', () => {
  let component: AnimationdefaultComponent;
  let fixture: ComponentFixture<AnimationdefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationdefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationdefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
