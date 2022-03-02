import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AllJobsPageComponent } from './components/all-jobs-page/all-jobs-page.component';
import { JobsByDepartmentPageComponent } from './components/jobs-by-department-page/jobs-by-department-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { JobDetailsComponent } from './components/jobs/job-details/job-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'alljobs',
    component: AllJobsPageComponent,
  },
  {
    path: 'alljobs/jobdetails/:id',
    component: JobDetailsComponent,
  },
  {
    path: 'jobsbydepartment',
    component: JobsByDepartmentPageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
