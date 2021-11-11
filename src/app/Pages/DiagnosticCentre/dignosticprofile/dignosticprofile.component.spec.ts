import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DignosticprofileComponent } from './dignosticprofile.component';

describe('DignosticprofileComponent', () => {
  let component: DignosticprofileComponent;
  let fixture: ComponentFixture<DignosticprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DignosticprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DignosticprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
