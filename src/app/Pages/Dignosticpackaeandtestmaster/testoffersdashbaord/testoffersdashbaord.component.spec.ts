import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestoffersdashbaordComponent } from './testoffersdashbaord.component';

describe('TestoffersdashbaordComponent', () => {
  let component: TestoffersdashbaordComponent;
  let fixture: ComponentFixture<TestoffersdashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestoffersdashbaordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestoffersdashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
