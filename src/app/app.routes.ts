import { Routes } from '@angular/router';
import { JobFormComponent } from './job-form/job-form.component';
import { JobListComponent } from './job-list/job-list.component'

export const routes: Routes = [
    { path: '', component: JobListComponent },
    { path: 'post', component: JobFormComponent },
];
