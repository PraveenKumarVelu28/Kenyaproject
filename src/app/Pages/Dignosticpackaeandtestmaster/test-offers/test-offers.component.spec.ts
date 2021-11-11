import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOffersComponent } from './test-offers.component';

describe('TestOffersComponent', () => {
  let component: TestOffersComponent;
  let fixture: ComponentFixture<TestOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
