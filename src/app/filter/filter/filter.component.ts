import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor(private filterService: FilterService) {}

  @Input() viewLayout: any;
  @Output() filterJobsEvent = new EventEmitter();
  showFilter: boolean = !this.filterService.isOptionsEmpty();

  options = this.filterService.optionsSet;

  removeOptionFromFilter(option: any) {
    this.filterService.removeOption(option);
    this.filterJobsEvent.emit();
    this.showFilter = !this.filterService.isOptionsEmpty();
  }

  removeAllOptions() {
    this.filterService.clearOptions();
    this.showFilter = !this.filterService.isOptionsEmpty();
    this.filterJobsEvent.emit();
  }

  ngOnInit(): void {}
}
