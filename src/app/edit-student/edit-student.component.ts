import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id:string="";
  studentForm: FormGroup;
  constructor(private activeRoute: ActivatedRoute,private studentservice: StudentServiceService,private router:Router) {
    this.studentForm = new FormGroup({
      'studentName': new FormControl('',Validators.required),
      'dob': new FormControl('',Validators.required),
      'skills': new FormControl('',Validators.required),
      'department': new FormControl('',Validators.required),
      'country': new FormControl('',Validators.required),
      'state': new FormControl('',Validators.required),
      'city': new FormControl('',Validators.required),
      'address': new FormControl('',Validators.required),
      'zipcode': new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")])
    })
   }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((Data) => {
      console.log(Data);
      this.id=Data.id;
      this.studentservice.getStudentById(Data.id).subscribe((d) => {
        console.log(d);
        this.studentForm.patchValue(d);
      })
    })
  }
  get f(){
    return this.studentForm.controls;
  }

  editStudent(){
    Object.keys(this.studentForm.controls).forEach(field => {
      const control = this.studentForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.studentForm.valid){
      this.studentservice.updateStudentByID(this.id,this.studentForm.value).subscribe(() => {
        this.router.navigate(['']);
      })
    }
  }

}
