import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigDashboardComponent } from './dig-dashboard.component';

describe('DigDashboardComponent', () => {
  let component: DigDashboardComponent;
  let fixture: ComponentFixture<DigDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
