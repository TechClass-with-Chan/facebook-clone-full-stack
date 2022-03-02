import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosInAYearComponent } from './photos-in-a-year.component';

describe('PhotosInAYearComponent', () => {
  let component: PhotosInAYearComponent;
  let fixture: ComponentFixture<PhotosInAYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosInAYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosInAYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
