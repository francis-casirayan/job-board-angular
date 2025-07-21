import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router"
import { JobService } from '../services/job.service';

@Component({
	selector: 'app-job-form',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './job-form.component.html',
	styleUrl: './job-form.component.scss'
})
export class JobFormComponent implements OnInit {
	jobForm: FormGroup

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private jobService: JobService
	) {}

	ngOnInit(): void {
		this.jobForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			title: ['', Validators.required],
			description: ['', Validators.required],
		});
	}

	submit() {
		if (this.jobForm.valid) {
		  this.jobService.postJob(this.jobForm.value).subscribe(() => {
		    alert('Job posted!');
		    this.jobForm.reset();
		  });
		}
  	}

	redirectTo(){
		this.router.navigate(['/']);
	}
}
