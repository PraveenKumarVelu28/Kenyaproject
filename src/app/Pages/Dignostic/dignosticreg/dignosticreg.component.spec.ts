import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DignosticregComponent } from './dignosticreg.component';

describe('DignosticregComponent', () => {
  let component: DignosticregComponent;
  let fixture: ComponentFixture<DignosticregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DignosticregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DignosticregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
