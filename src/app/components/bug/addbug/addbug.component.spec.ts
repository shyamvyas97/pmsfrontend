import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbugComponent } from './addbug.component';

describe('AddbugComponent', () => {
  let component: AddbugComponent;
  let fixture: ComponentFixture<AddbugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
