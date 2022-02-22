import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChronicleComponent } from './profile-chronicle.component';

describe('ProfileChronicleComponent', () => {
  let component: ProfileChronicleComponent;
  let fixture: ComponentFixture<ProfileChronicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileChronicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChronicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
