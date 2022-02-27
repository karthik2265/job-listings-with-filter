import { Injectable } from '@angular/core';
import { JobsService } from './jobs.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private jobsService: JobsService) {
    this.jobsService.getJobs().subscribe((res: any) => {
      this.jobs = res;
      this.filteredJobs = [...this.jobs];
    });
  }

  jobs = [];
  filteredJobs = [];

  optionsSet = new Set();

  isOptionsEmpty() {
    return this.optionsSet.size === 0;
  }

  getOptionsSize() {
    return this.optionsSet.size;
  }

  addOption(option: any) {
    this.optionsSet.add(option);
    this.filterJobs();
  }

  removeOption(option: any) {
    this.optionsSet.delete(option);
    this.filterJobs();
  }

  inOptions(option: any) {
    return this.optionsSet.has(option);
  }

  clearOptions() {
    this.optionsSet = new Set();
    this.filteredJobs = [...this.jobs];
  }

  filterJobs() {
    let options = [...this.optionsSet];
    this.filteredJobs = this.jobs.filter((jobDetails) => {
      // get tags and make it a set
      let tags = new Set(this.jobsService.getTags(jobDetails));
      // check if every option exists in tags
      return options.every((option) => tags.has(option));
    });
  }
}
