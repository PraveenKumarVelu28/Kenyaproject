import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoactionordersComponent } from './noactionorders.component';

describe('NoactionordersComponent', () => {
  let component: NoactionordersComponent;
  let fixture: ComponentFixture<NoactionordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoactionordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoactionordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
