import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobComponent } from './jobs/job/job.component';
import { FilterComponent } from './filter/filter/filter.component';

@NgModule({
  declarations: [AppComponent, JobsListComponent, JobComponent, FilterComponent],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
