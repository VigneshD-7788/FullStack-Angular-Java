import { Component, OnInit } from '@angular/core';
import { EmployeeRegisterService } from '../employee-register.service';
import { Client } from 'src/interface/Client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss']
})
export class ClientRegisterComponent implements OnInit{

  clientForm: FormGroup;
  salutations: string[] = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.']; // Add more if needed
  sourceList: string[] = ['Advertisement', 'Twitter', 'Facebook', 'Whatsapp', 'Instagram', 'Linkedin', 'ECS Website']; // Add more if needed
  message: any;
  success:boolean=false;
  title="Cloud ECS Infotech Client Register form"

  constructor(private service: EmployeeRegisterService, private fb: FormBuilder, public snackBar: MatSnackBar) {

    this.clientForm = this.fb.group({
      salutation: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone: ['', Validators.required],
      description: [''],
      sources: ['']
    });
   }

  ngOnInit() {

  }

  // registerClient() {
  //   if (this.clientForm.valid) {
  //     const formData = this.clientForm.value;
  //     let resp = this.service.doRegistrationClient(formData);
  //     resp.subscribe((data) => this.message = data);
  //   } else {
  //     // Mark form controls as touched to trigger validation messages
  //     this.clientForm.markAllAsTouched();
  //   }
  // }

  registerClient() {
    if (this.clientForm.valid) {
      const formData = this.clientForm.value;
      let resp = this.service.doRegistrationClient(formData);
  
      resp.subscribe(
        (data) => {
          // Show success snackbar
          this.success =true
          this.message = data;
          this.openSnackBar(this.message, 'success');
        },
        (error) => {
          // Show failure snackbar
          this.success=false;
          this.message = 'Client registration failed'
          this.openSnackBar(this.message, 'error');
        }
      );
    } else {
      this.clientForm.markAllAsTouched();
    }
  }

  openSnackBar(message: string, type: 'success' | 'error') {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
      panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar',
      verticalPosition: 'top',
    });
  }

}
