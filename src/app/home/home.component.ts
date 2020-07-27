import { Component, OnInit } from '@angular/core';
import { SongserviceService } from '../songservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  songName:string;
  userName;
  constructor(private songserv:SongserviceService){
    this.userName=this.songserv.username;
    console.log(this.userName);
  }
  public play(){
    this.songserv.play();
    
  }
  public ShowMsg()
  {
    alert("User cannot update the user details, Only Admin can update the user details.");
  }
  
  

  ngOnInit(): void {
  }

}
