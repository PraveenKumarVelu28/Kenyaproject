import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationdashboardComponent } from './applicationdashboard.component';

describe('ApplicationdashboardComponent', () => {
  let component: ApplicationdashboardComponent;
  let fixture: ComponentFixture<ApplicationdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
