import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JobsListComponent } from './components/jobs/jobs-list/jobs-list.component';
import { JobComponent } from './components/jobs/job/job.component';
import { FilterComponent } from './components/filter/filter.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AllJobsPageComponent } from './components/all-jobs-page/all-jobs-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsByDepartmentPageComponent } from './components/jobs-by-department-page/jobs-by-department-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { JobDetailsComponent } from './components/jobs/job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsListComponent,
    JobComponent,
    FilterComponent,
    HomePageComponent,
    AllJobsPageComponent,
    NavbarComponent,
    JobsByDepartmentPageComponent,
    PageNotFoundComponent,
    JobDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
