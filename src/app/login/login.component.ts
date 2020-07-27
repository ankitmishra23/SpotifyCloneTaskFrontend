import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { SongserviceService } from '../songservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
  submitform=false;
  logged=true;
  
  constructor(private log:FormBuilder,private data:SongserviceService,private router: Router) { 
    this.login=this.log.group(
      {
        userName:this.log.control("",Validators.required),
        password:this.log.control("",[Validators.required,Validators.minLength(8)])
      })
  }

  ngOnInit(): void {
  }
  onSubmit()
  {
    
  
    this.submitform=true;
    if(this.login.invalid)
    {
      alert("Something is wrong");
      this.logged=false;
      return;
    }
    else{
      this.data.GetAuth(this.login.controls['userName'].value,this.login.controls['password'].value).subscribe(a=>{
        console.log(a);
        if(a)
        {
          alert("You are logged in.");
          if(this.data.canActivate(a)){
            this.router.navigate(['/home']);
            this.data.SetUserName(this.login.controls['userName'].value);
          }
        }
        else{
          alert("Either username or password is wrong");
        }
      });
    }
  }

}
