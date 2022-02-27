import { Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
})
export class JobsListComponent {
  constructor(public filterService: FilterService) {}
  @Input() viewLayout: any;
}
