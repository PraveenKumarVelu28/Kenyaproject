import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedappoitmentsComponent } from './visitedappoitments.component';

describe('VisitedappoitmentsComponent', () => {
  let component: VisitedappoitmentsComponent;
  let fixture: ComponentFixture<VisitedappoitmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitedappoitmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitedappoitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
