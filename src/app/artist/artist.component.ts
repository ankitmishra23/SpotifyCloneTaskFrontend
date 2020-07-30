import { Component, OnInit } from '@angular/core';
import { SongserviceService } from '../songservice.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  followedArtist:any=[];
  unfollowedArtist:any=[];
  totalRec:any;
  page=1;
  page2=1;
  config;
  artist:any=[];
  valueofbutton:any=[];
  artistId:any;
  status=["Follow","Unfollow"];
  checkfollow:any=[];
  userId;
  constructor(private data:SongserviceService) {     
    this.reload();
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.artist.length,      
    };    
  }
  pageChanged(event){
    this.config.currentPage = event;    
  }

  public reload()
  {
    this.data.FetchArtistData().subscribe(art=>{
      this.artist=art;
      this.totalRec=this.artist.length;
      this.userId=this.data.GetUserDetailsByName(this.data.username).subscribe(user=>{
        this.userId=user['userId'];
        this.data.FetchArtistFollowedByUserId(this.userId).subscribe(a=>{
          this.followedArtist=a;
        });
        this.data.FetchUnfollowedArtist(this.userId).subscribe(a=>{
          this.unfollowedArtist=a;
        });
        this.data.FetchArtistFollowedByUserId(user['userId']).subscribe(follow=>
          {
            this.checkfollow=follow;
            for(let i=0;i<this.artist.length;i++)
            {
              let flag=false;
              for(let j=0;j<this.checkfollow.follow.length;j++)
              {
                if(this.artist[i].artistId==this.checkfollow.follow[j].artistId)
                {
                    this.valueofbutton[i]="UnFollow";
                    flag=true;
                    break;
                }
              }
              if(!flag)
              {
                this.valueofbutton[i]="Follow";
              }
            }
      })
        })
    });
  }
  
  public follow(i)
  {
    this.data.FetchArtistByName(i).subscribe(a=>{
      this.artistId=a['artistId'];
      this.data.AddFollowings({
        "artistId":this.artistId,
        "userId":this.userId
      }).subscribe(b=>{
        alert("Artist followed!! Click on any tab and again click on artist tab to see the changes.");
       this.reload();
      })
    }); 
  }
  public unfollow(i)
  {
    this.data.FetchArtistByName(i).subscribe(a=>{
      this.artistId=a['artistId'];
    this.data.UnfollowArtist(this.userId,this.artistId).subscribe(b=>{
      alert("Artist Unfollowed!! Click on any tab and again click on artist tab to see the changes.");
      this.reload();
    })
    });    
  }
  ngOnInit(): void {     
  }
}
