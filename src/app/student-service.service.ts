import { Injectable } from '@angular/core';
import { student } from './model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }

  saveStudent(student:student){
    return this.http.post(`https://student1admin.herokuapp.com/student1`,student);
  }

  getAllStudents(){
    return this.http.get<Array<student>>(`https://student1admin.herokuapp.com/student2`);
  }

  getStudentById(id:string){
    return this.http.get<student>(`https://student1admin.herokuapp.com/student/${id}`);
  }

  updateStudentByID(id:string,studentData:student){
    return this.http.put(`https://student1admin.herokuapp.com/student/${id}`,studentData);
  }

  deleteStudentByID(id:string){
    return this.http.delete(`https://student1admin.herokuapp.com/student/${id}`);
  }
}
