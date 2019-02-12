import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingFeedComponent } from './tracking-feed.component';

describe('TrackingFeedComponent', () => {
  let component: TrackingFeedComponent;
  let fixture: ComponentFixture<TrackingFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
