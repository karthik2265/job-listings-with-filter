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
}
