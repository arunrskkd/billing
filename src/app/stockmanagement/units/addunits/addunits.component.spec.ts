import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddunitsComponent } from './addunits.component';

describe('AddunitsComponent', () => {
  let component: AddunitsComponent;
  let fixture: ComponentFixture<AddunitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddunitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
