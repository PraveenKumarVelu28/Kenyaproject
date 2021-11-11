import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledappoitmentsComponent } from './cancelledappoitments.component';

describe('CancelledappoitmentsComponent', () => {
  let component: CancelledappoitmentsComponent;
  let fixture: ComponentFixture<CancelledappoitmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelledappoitmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledappoitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
