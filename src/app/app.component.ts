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
  viewLayout: boolean = false;

  constructor() {}

  ngOnInit() {}

  setViewLayout(value: boolean) {
    this.viewLayout = value;
  }
}
