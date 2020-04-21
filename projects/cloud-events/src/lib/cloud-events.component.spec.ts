import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudEventsComponent } from './cloud-events.component';

describe('CloudEventsComponent', () => {
  let component: CloudEventsComponent;
  let fixture: ComponentFixture<CloudEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
