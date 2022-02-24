import { Component, EventEmitter, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
})
export class JobsListComponent {
  constructor(private filterService: FilterService) {}
  @Input() jobs: any;
  @Output() filterJobsEventBubble2 = new EventEmitter();
  @Input() viewLayout: any;

  filterJobs() {
    this.filterJobsEventBubble2.emit();
  }
}
