import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '../shared/models/user/user.model';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  constructor(private userService: UserService) {

  }
  user: User = {}

  submit() {
    this.userService.register(this.user)
  }

}
