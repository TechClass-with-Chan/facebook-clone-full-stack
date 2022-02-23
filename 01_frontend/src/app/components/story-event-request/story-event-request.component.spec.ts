import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryEventRequestComponent } from './story-event-request.component';

describe('StoryEventRequestComponent', () => {
  let component: StoryEventRequestComponent;
  let fixture: ComponentFixture<StoryEventRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryEventRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryEventRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
