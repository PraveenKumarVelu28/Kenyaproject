import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceMasterDashComponent } from './province-master-dash.component';

describe('ProvinceMasterDashComponent', () => {
  let component: ProvinceMasterDashComponent;
  let fixture: ComponentFixture<ProvinceMasterDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinceMasterDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceMasterDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
