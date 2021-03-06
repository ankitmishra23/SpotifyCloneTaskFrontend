import { Component, OnInit } from '@angular/core';
import {SongserviceService} from '../songservice.service';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css']
})
export class SonglistComponent implements OnInit {
  config: any;
  userId;
  songs=["Aise Na Mujhe Tum Dekho","Ankahee","Boy With Luv","DDU-DU-DDU-DU","Derniere Danse","Dil Bechara","Dil Tod Ke","End of Time","Fake Love","Fi Ha","Girlfriend","How You Like That","Ik Tera","Intentions","Ishq Ka Raja","Kisi Gair Ka Nahi","Kyon","ON","Ooh Na Na Na","Raja Ko Rani Se Pyar","Safari","Serhat Durmus","Stuck With U","Taare Ginn","Tere Naal","Trust Nobody","Voracity"];
  
playlist:any=[];
  constructor(private songserv:SongserviceService) {    
    this.userId=this.songserv.GetUserDetailsByName(this.songserv.username).subscribe(a=>{
      this.userId=a['userId'];
      this.songserv.GetPlaylistById(this.userId).subscribe(b=>{
        this.playlist=b;
      })
    });
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.songs.length
    };
   }
  public playsong(i)
  {
    this.songserv.setValue(i);
    this.songserv.play();
  }
  playlistId;
  songId;
  
  public AddToPlaylist(songName)
  {
    const playlist=(document.getElementById(songName) as HTMLInputElement).value;
    this.userId=this.songserv.GetUserDetailsByName(this.songserv.username).subscribe(a=>{
      this.userId=a['userId'];
      this.songserv.GetPlaylistIdByUserId(playlist,this.userId).subscribe(a=>{
        if(a!=-1){
          this.playlistId=a;
          this.songserv.GetSongId(songName).subscribe(b=>{
            this.songId=b;
            this.songserv.AddPlaylistSongs({
              "playlistId":this.playlistId,
              "songId":this.songId
            }).subscribe(c=>{
              alert("Song added!!");
            })
          });
      }
      else
      {
        alert("This playlist does not exits!!");
      }
      });
    });
  }  
   pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit(): void {
  }
  public AddToPlaylistFromSelect(songName)
  {    
    const newplaylist=(document.getElementById('validationDefault04') as HTMLSelectElement).value;
    this.songserv.GetPlaylistId(newplaylist,this.userId).subscribe(b=>{
      this.songserv.GetSongId(songName).subscribe(a=>{
        this.songserv.AddPlaylistSongs({
          "playlistId":b,
          "songId":a
        }).subscribe(c=>{          
          alert("Song added!!");
        })
      })
    })    
  }
}
