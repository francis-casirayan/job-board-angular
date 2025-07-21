import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job, JobResponse } from '../interfaces/job.interface'

@Injectable({ providedIn: 'root' })
export class JobService {
    // TODO create an env file for environment variables
    private baseUrl = 'http://localhost:8000/api';

    constructor(private http: HttpClient) {}

    getJobs(): Observable<JobResponse> {
        const headers = new HttpHeaders({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');
        return this.http.get<JobResponse>(`${this.baseUrl}/jobs`, { headers: headers } );
    }

    postJob(job: Job): Observable<any> {
        return this.http.post(`${this.baseUrl}/jobs`, job);
    }
}