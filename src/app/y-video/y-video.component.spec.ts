import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YVideoComponent } from './y-video.component';

describe('YVideoComponent', () => {
  let component: YVideoComponent;
  let fixture: ComponentFixture<YVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
