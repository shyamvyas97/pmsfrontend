import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAdapterComponent } from './date-adapter.component';

describe('DateAdapterComponent', () => {
  let component: DateAdapterComponent;
  let fixture: ComponentFixture<DateAdapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateAdapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
