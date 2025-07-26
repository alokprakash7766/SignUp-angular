import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService

  ) { }


  login = {
    email: '',
    password: ''
  }


  submit() {

    this.authService.setData(this.login)
    this.toastr.success("Login Sucessfull" , "Success")
    this.router.navigateByUrl("/home")


  }
}
