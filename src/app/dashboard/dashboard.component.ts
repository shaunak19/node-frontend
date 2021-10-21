import { Component, OnInit } from '@angular/core';
import { student } from '../model';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datas:Array<student> = [];
  constructor(private studentservice:StudentServiceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.studentservice.getAllStudents().subscribe((data) => {
      this.datas = data;
    })
  }

  deleteStudent(_id:string){
    console.log(_id);
    this.studentservice.deleteStudentByID(_id).subscribe((data)=>{
      this.loadData();
    })
  }

}
