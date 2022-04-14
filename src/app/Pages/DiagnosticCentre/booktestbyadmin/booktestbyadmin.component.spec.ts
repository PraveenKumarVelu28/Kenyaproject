import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktestbyadminComponent } from './booktestbyadmin.component';

describe('BooktestbyadminComponent', () => {
  let component: BooktestbyadminComponent;
  let fixture: ComponentFixture<BooktestbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooktestbyadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktestbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
