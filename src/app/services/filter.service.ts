import { Injectable, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService implements OnInit {
  constructor() {}

  optionsSet = new Set(['karthik']);

  isOptionsEmpty() {
    return this.optionsSet.size === 0;
  }

  addOption(option: any) {
    this.optionsSet.add(option);
  }

  removeOption(option: any) {
    this.optionsSet.delete(option);
  }

  inOptions(option: any) {
    return this.optionsSet.has(option);
  }

  clearOptions() {
    this.optionsSet = new Set();
  }

  filterJobs() {
    // this.filteredJobs = this.jobs.filter()
  }

  ngOnInit() {}
}
