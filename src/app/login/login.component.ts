import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ""
  password: string = ""

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

async  onSubmit() {


   let res = this.taskService.loginUser(this.email , this.password).subscribe((res:any) => {
     if (res.text === "success") {
       this.router.navigateByUrl('cart')
     } else {
       this.router.navigateByUrl('login')
     }
   })
  //   let msg:any = res["msg"]
  // let res:any = JSON.stringify(await this.taskService.loginUser(this.email,this.password).toPromise())
  // let res: any = await this.taskService.loginUser(this.email,this.password).toPromise()
  // console.log(res.text);

      // const msg = res['msg'];
      // console.log(res)
      // console.log(res.valueOf()['msg']);

      // if (msg === "success") {
      //   console.log("done")
      // } else {
      //   console.log("fail")
      // }
      // console.log(res)

    }
    // console.log(this.email, this.password)


  }


