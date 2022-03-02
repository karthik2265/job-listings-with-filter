import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsByDepartmentPageComponent } from './jobs-by-department-page.component';

describe('JobsByDepartmentPageComponent', () => {
  let component: JobsByDepartmentPageComponent;
  let fixture: ComponentFixture<JobsByDepartmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsByDepartmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsByDepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
