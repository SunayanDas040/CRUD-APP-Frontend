import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { User } from '../User'
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  first_name: string = ""
  last_name: string = ""
  email: string =""
  phone_number: number = 0
  city: string = ""
  password: string = ""

  // @Input() user: User

  @Output() addUser: EventEmitter<User> = new EventEmitter()

  constructor(private taskService : TaskService, private router : Router) {
   }

  ngOnInit(): void {
  }

  onSubmit() {
    const user ={
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      phone_number: this.phone_number,
      city: this.city,
      password: this.password
    }

    console.log(user)
    this.taskService.registerUser(user).subscribe( (response: any) => {
      console.log(response);
      this.router.navigateByUrl('/')
    })
  }

}
