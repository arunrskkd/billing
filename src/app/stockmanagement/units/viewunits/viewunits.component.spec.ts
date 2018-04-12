import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewunitsComponent } from './viewunits.component';

describe('ViewunitsComponent', () => {
  let component: ViewunitsComponent;
  let fixture: ComponentFixture<ViewunitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewunitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
