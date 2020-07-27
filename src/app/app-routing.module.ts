import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SonglistComponent } from './songlist/songlist.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {SongserviceService} from './songservice.service';
import { SearchsongsComponent } from './searchsongs/searchsongs.component';


const routes: Routes = [
  
  {
    path:'login',
    component:LoginComponent    
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[SongserviceService],
    children:[
      {
        path:'songs',
        component:SonglistComponent
      },
      {
        path:'playlist',
        component:PlaylistComponent
      },
      {
        path:'album',
        component:AlbumComponent
      },{
        path:'artist',
        component:ArtistComponent
      },{
        path:'searchsongs',
        component:SearchsongsComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    SongserviceService
  ]
})
export class AppRoutingModule { }
