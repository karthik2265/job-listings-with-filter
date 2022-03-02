import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobsPageComponent } from './all-jobs-page.component';

describe('AllJobsPageComponent', () => {
  let component: AllJobsPageComponent;
  let fixture: ComponentFixture<AllJobsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllJobsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJobsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
