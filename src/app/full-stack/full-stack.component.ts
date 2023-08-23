import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FullStackService } from '../full-stack.service';

@Component({
  selector: 'app-full-stack',
  templateUrl: './full-stack.component.html',
  styleUrls: ['./full-stack.component.scss']
})
export class FullStackComponent implements OnInit {

  title: string = "Full Stack Development";
  employees: any;

  constructor(private service: FullStackService) {

  }
  ngOnInit() {
    // let response = this.http.get("http://localhost:8080/api/employeesTest")
    // response.subscribe((data) => this.employees = data)

    this.employees = this.service.getEmployees().subscribe(data=>this.employees= data);

  }

}
