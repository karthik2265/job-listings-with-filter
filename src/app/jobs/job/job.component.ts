import { Component, Input, OnInit, Output } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  constructor(private filterService: FilterService) {}

  @Output() filterJobsEventBubble1 = new EventEmitter();
  @Input() jobDetails: any;
  @Input() viewLayout: any;

  addOptionToFilter(option: any) {
    this.filterService.addOption(option);
    this.filterJobs();
  }

  filterJobs() {
    this.filterJobsEventBubble1.emit();
  }

  ngOnInit(): void {}
}
