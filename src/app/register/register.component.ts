import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/interface/employee';
import { EmployeeRegisterService } from '../employee-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  employee: Employee = {
    first_name: "",
    last_name: "",
    salary: 0,
    role: ""
  };;

  message: any;

  constructor(private service: EmployeeRegisterService) { }

  ngOnInit() {

  }

  registerNow() {
    let resp = this.service.doRegistration(this.employee);
    resp.subscribe((data) => this.message = data);
  }

}
