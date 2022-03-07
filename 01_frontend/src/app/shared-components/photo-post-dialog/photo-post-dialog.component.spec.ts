import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPostDialogComponent } from './photo-post-dialog.component';

describe('PhotoPostDialogComponent', () => {
  let component: PhotoPostDialogComponent;
  let fixture: ComponentFixture<PhotoPostDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoPostDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
