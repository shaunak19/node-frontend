import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;
  constructor(private studentservice: StudentServiceService,private router:Router) {
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
  }
  get f(){
    return this.studentForm.controls;
  }

  submitStudent(){
    Object.keys(this.studentForm.controls).forEach(field => {
      const control = this.studentForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.studentForm.valid){
      console.log(this.studentForm.value);
      this.studentservice.saveStudent(this.studentForm.value).subscribe(() => {
        this.router.navigate([''])
      },() => {
        alert("Something Went Wrong")
      })
      
    }
  }

}
