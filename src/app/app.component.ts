import { Component, OnInit } from '@angular/core';
import { FilterService } from './services/filter.service';
import { JobsService } from './services/jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'job-listings-with-filter';
  jobs: any = [];
  viewLayout: boolean = false;

  constructor(private filterService: FilterService) {}

  filterJobs() {
    this.jobs = this.filterService.filter();
  }

  ngOnInit() {
    this.filterJobs();
  }

  setViewLayout(value: boolean) {
    this.viewLayout = value;
  }
}
