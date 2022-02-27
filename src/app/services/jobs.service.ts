import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobsUrl = 'api/jobs';
  constructor(private http: HttpClient) {}

  getJobs() {
    return this.http.get(this.jobsUrl);
  }

  getTags(jobDetails: any) {
    let tags = [];
    // get all tags i.e role, level, languages, tools
    let role = jobDetails['role'];
    tags.push(role);
    let level = jobDetails['level'];
    tags.push(level);
    for (let language of jobDetails['languages']) {
      tags.push(language);
    }
    for (let tool of jobDetails['tools']) {
      tags.push(tool);
    }
    return tags;
  }
}
