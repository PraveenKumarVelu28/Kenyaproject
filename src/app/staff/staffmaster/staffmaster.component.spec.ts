import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffmasterComponent } from './staffmaster.component';

describe('StaffmasterComponent', () => {
  let component: StaffmasterComponent;
  let fixture: ComponentFixture<StaffmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
