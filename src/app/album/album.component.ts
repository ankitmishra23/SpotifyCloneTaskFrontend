import { Component, OnInit } from '@angular/core';
import { SongserviceService } from '../songservice.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
album:any=[];
config: any;
status=true;
albumsongs:any=[];

  constructor(private data:SongserviceService) {
    this.data.FetchAlbums().subscribe(a=>{
      console.log(a);
      this.album=a;
      console.log(this.album)
    });
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.albumsongs.length
    };
   }

   public ShowSongs(i)
   {
     this.status=false;
     console.log(this.status);
     this.data.FetchAlbumSongsById(i).subscribe(a=>{
      this.albumsongs=a;
     });
   }
   public togglestatus()
   {
     this.status=true;
   }
   pageChanged(event){
    this.config.currentPage = event;
  }
  public playsong(i)
  {
    this.data.setValue(i);
    this.data.play();
  }

  ngOnInit(): void {
  }

}
