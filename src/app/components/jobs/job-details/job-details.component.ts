import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private filterService: FilterService
  ) {}

  jobDetails: any = {};

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.jobDetails = this.filterService.getJobDetailsById(id);
  }
}
