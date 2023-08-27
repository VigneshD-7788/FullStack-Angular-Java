import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/interface/Client';
import { Employee } from 'src/interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRegisterService {

  constructor(private http:HttpClient) { }

  public doRegistration(employee: Employee){
    return this.http.post("http://localhost:8080/api/createEmployee",employee,{responseType:'text' as 'json'});
  }

  public doRegistrationClient(clientData: any){
    return this.http.post("http://localhost:8080/api/newSampleClient",clientData,{responseType:'text' as 'json'});
  }

}
