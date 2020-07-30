import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormArray,FormGroup,Validator, Validators} from '@angular/forms'
import { SongserviceService } from '../songservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitform=false;
  register:FormGroup;  
    constructor(private reg:FormBuilder,private data:SongserviceService) { 
      this.ngOnInit();
    }
  
    ngOnInit(): void {
      this.register=this.reg.group(
        {
          username:this.reg.control("",Validators.required),
          email:this.reg.control("",[Validators.required,Validators.email]),
          password:this.reg.control("",[Validators.required,Validators.minLength(8)]),
          gender:this.reg.control("",Validators.required),
          location:this.reg.control("",Validators.required),
          phone:this.reg.control("",[Validators.required,Validators.maxLength(10),Validators.minLength(10)])
        }
      )
    }
    onSubmit()
    {
      this.submitform=true;
      if(this.register.invalid)
      {
        alert("Something is wrong.");
        return;
      }
      else{
      let user={
        "userName":this.register.controls['username'].value,
        "email":this.register.controls['email'].value,
        "password":this.register.controls['password'].value,
        "gender":this.register.controls['gender'].value,
        "location":this.register.controls['location'].value,
        "phone":this.register.controls['phone'].value
      }
      this.data.PostUserData(user).subscribe(a=>{
      });
      alert("Register successful!! Click on login to continue");
      }
    }
}
