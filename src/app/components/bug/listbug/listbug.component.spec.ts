import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbugComponent } from './listbug.component';

describe('ListbugComponent', () => {
  let component: ListbugComponent;
  let fixture: ComponentFixture<ListbugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
