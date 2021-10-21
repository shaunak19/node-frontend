import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
{
  path: '',
  component: DashboardComponent
},
{
  path: 'student-form',
  component: StudentFormComponent
},
{
  path: 'edit-student/:id',
  component: EditStudentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
