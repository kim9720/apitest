import { NgIf } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  // Implement your login logic here
  login() {
    // Placeholder login logic for demonstration
    if (this.username && this.email && this.password) {
      console.log('Logged in successfully');
    } else {
      console.log('Login failed');
    }
  }
}

