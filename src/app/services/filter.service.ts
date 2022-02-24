import { Injectable, OnInit } from '@angular/core';
import { JobsService } from './jobs.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService implements OnInit {
  constructor(private jobsService: JobsService) {}

  optionsSet = new Set(['Frontend', 'CSS', 'JavaScript']);
  jobs = [];
  filteredJobs = [];

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

  filter() {
    this.filteredJobs = this.jobs.filter((job: any) => {
      // add all tags of the job in a set
      let tags = new Set();
      tags.add(job['role']);
      tags.add(job['level']);
      job['tools'].forEach((tool: any) => {
        tags.add(tool);
      });
      job['languages'].forEach((language: any) => {
        tags.add(language);
      });
      // check if the tagsSet contains the optionsSet
      let res = [...this.optionsSet].every((option: any) => tags.has(option));
      return res;
    });
  }

  ngOnInit() {
    this.jobsService.getJobs().subscribe((data: any) => {
      this.jobs = data;
    });
    this.filter();
  }
}
