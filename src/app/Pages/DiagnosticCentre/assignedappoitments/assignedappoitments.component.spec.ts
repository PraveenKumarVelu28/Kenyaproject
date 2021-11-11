import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedappoitmentsComponent } from './assignedappoitments.component';

describe('AssignedappoitmentsComponent', () => {
  let component: AssignedappoitmentsComponent;
  let fixture: ComponentFixture<AssignedappoitmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedappoitmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedappoitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
