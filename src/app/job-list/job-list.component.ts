import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { Job } from '../interfaces/job.interface';
import { Router } from "@angular/router"

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})

export class JobListComponent implements OnInit {
	jobs: Job[];
	constructor(
		private jobService: JobService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.jobService.getJobs().subscribe(jobs => {
      		this.jobs = jobs.data;
    	});
	}

	redirectTo(){	
		this.router.navigate(['/post']);
	}	
}
