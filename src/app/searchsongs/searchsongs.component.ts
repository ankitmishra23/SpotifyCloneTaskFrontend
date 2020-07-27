import { Component, OnInit } from '@angular/core';
import { SongserviceService } from '../songservice.service';

@Component({
  selector: 'app-searchsongs',
  templateUrl: './searchsongs.component.html',
  styleUrls: ['./searchsongs.component.css']
})
export class SearchsongsComponent implements OnInit {
song;
  constructor(private songserv:SongserviceService) { 
  }
status=false;
  public GetSong()
  {
    this.status=true;
    const input=(document.getElementById('search_song') as HTMLInputElement).value;
    console.log(input);
    this.songserv.FetchSongNameByName(input).subscribe(a=>{
      console.log(a);
      this.song=a['songName'];
    });
    console.log(this.song);
    
  }
  public playsong(i)
  {    
    this.songserv.setValue(i);
    this.songserv.play();
  }

  ngOnInit(): void {
  }

}
