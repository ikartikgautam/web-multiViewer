import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GViewerComponent } from './g-viewer.component';

describe('GViewerComponent', () => {
  let component: GViewerComponent;
  let fixture: ComponentFixture<GViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
