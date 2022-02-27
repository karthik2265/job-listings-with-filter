import { Component, Input, OnInit, Output } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  constructor(private filterService: FilterService) {}

  @Input() jobDetails: any;
  @Input() viewLayout: any;
  tags: string[] = [];
  isFeatured: boolean = false;

  ngOnInit(): void {
    // get all tags i.e role, level, languages, tools
    let role = this.jobDetails['role'];
    this.tags.push(role);
    let level = this.jobDetails['level'];
    this.tags.push(level);
    for (let language of this.jobDetails['languages']) {
      this.tags.push(language);
    }
    for (let tool of this.jobDetails['tools']) {
      this.tags.push(tool);
    }
    // set isFeatured
    this.isFeatured = this.jobDetails['featured'];
    console.log(this.jobDetails);
  }
}
