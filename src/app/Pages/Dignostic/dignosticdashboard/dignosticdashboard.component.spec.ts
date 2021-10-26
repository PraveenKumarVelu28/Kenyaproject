import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DignosticdashboardComponent } from './dignosticdashboard.component';

describe('DignosticdashboardComponent', () => {
  let component: DignosticdashboardComponent;
  let fixture: ComponentFixture<DignosticdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DignosticdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DignosticdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
