import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullStackService {

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get("http://localhost:8080/api/employeesTest");
  }
}
