import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  constructor(
    public filterService: FilterService,
    private jobsService: JobsService
  ) {}

  @Input() jobDetails: any;
  tags: string[] = [];
  isFeatured: boolean = false;

  ngOnInit(): void {
    // set isFeatured
    this.isFeatured = this.jobDetails['featured'];
    // get tags
    this.tags = this.jobsService.getTags(this.jobDetails);
  }
}
