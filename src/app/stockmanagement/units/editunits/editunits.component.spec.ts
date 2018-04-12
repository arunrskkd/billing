import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditunitsComponent } from './editunits.component';

describe('EditunitsComponent', () => {
  let component: EditunitsComponent;
  let fixture: ComponentFixture<EditunitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditunitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
