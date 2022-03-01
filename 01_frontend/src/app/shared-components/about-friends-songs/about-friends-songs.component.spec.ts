import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFriendsSongsComponent } from './about-friends-songs.component';

describe('AboutFriendsSongsComponent', () => {
  let component: AboutFriendsSongsComponent;
  let fixture: ComponentFixture<AboutFriendsSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFriendsSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFriendsSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
