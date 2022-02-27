import { Component, EventEmitter, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { Input, Output } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
})
export class JobsListComponent implements OnInit {
  constructor(private jobsService: JobsService) {}
  @Input() viewLayout: any;
  jobs = [];

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe({
      next: (res: any) => {
        this.jobs = res;
      },
    });
  }
}
