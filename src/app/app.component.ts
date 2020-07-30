import { Component,ViewEncapsulation } from '@angular/core';
import { SongserviceService } from './songservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  title = 'spotifytask';
  songName:string;
  constructor(private songserv:SongserviceService){    
  }
  public play(){
    this.songserv.play();    
  }
  
 
 
}
