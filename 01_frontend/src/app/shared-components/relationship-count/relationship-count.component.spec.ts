import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipCountComponent } from './relationship-count.component';

describe('RelationshipCountComponent', () => {
  let component: RelationshipCountComponent;
  let fixture: ComponentFixture<RelationshipCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationshipCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
