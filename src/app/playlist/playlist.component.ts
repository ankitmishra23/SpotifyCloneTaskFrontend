import { Component, OnInit } from '@angular/core';
import { SongserviceService } from '../songservice.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  config;
  page=1;
  playlist:any=[];
  id;
  status=true;
  playlistSongs:any=[];
  constructor(private data:SongserviceService) {
    this.reload();

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.playlistSongs.length
    };
   }
   public reload()
   {
    this.data.GetUserDetailsByName(this.data.username).subscribe(a=>{
      //console.log(a);
      this.id=a['userId'];
    this.data.GetPlaylist(this.id).subscribe(c=>{
      //console.log(c);
      this.playlist=c;
    });
    })
   }

  ngOnInit(): void {
  }
  pageChanged(event){
    this.config.currentPage = event;
    
  }

  public AddPlaylist()
  {
    const input=(document.getElementById('playlist_name') as HTMLInputElement).value;    
      this.data.AddPlaylist({
        "playlistName":input,
        "userId": this.id 
      }).subscribe(b=>{
        //console.log(b);
        alert("Playlist Added");
        this.reload();
      });
  
  }
  public ShowSongs(id)
  {
    this.status=false;
      this.data.GetPlaylistSongs(this.id,id).subscribe(a=>{
        //console.log(a);
        this.playlistSongs=a;
      });
  }
  public togglestatus()
   {
     this.status=true;
   }

  public playsong(i)
  {
    this.data.setValue(i);
    this.data.play();
  }
  public RemoveFromPlaylist(songName)
  {

    console.log(songName);
    this.data.GetSongId(songName).subscribe(a=>{
      //console.log(a);
      //console.log(this.playlistSongs['playlistName']);
      this.data.GetPlaylistId(this.playlistSongs['playlistName']).subscribe(b=>{
        //console.log(b);
        this.data.RemoveSongFromPlaylist(a,b).subscribe(c=>{
          //console.log(c);
          
        });
      })
      
    })

    alert("To check updated playlist click on the back button and then again click on the playlist.")
    
    
  }
}
