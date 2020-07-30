import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormArray,FormGroup,Validator, Validators} from '@angular/forms'
import { SongserviceService } from '../songservice.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  submitform=false;
  update:FormGroup;
  constructor(private reg:FormBuilder,private data:SongserviceService) { }

  ngOnInit(): void {
    this.update=this.reg.group(
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
      if(this.update.invalid)
      {
        alert("Something is wrong.");
        return;
      }
      else{
      let user={
        "userName":this.update.controls['username'].value,
        "email":this.update.controls['email'].value,
        "password":this.update.controls['password'].value,
        "gender":this.update.controls['gender'].value,
        "location":this.update.controls['location'].value,
        "phone":this.update.controls['phone'].value
      }
      this.data.GetUserDetailsByName(this.data.username).subscribe(a=>{
        const userId=a['userId'];
        this.data.UpdateUser(user,userId).subscribe(b=>{
          alert("Profile Updated!!");
        });
      })
      }
    }
}
