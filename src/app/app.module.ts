import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SonglistComponent } from './songlist/songlist.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { SongserviceService } from './songservice.service';
import { PlaylistComponent } from './playlist/playlist.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SearchsongsComponent } from './searchsongs/searchsongs.component';
import { UpdateComponent } from './update/update.component';




@NgModule({
  declarations: [
    AppComponent,
    SonglistComponent,
    PlaylistComponent,
    AlbumComponent,
    ArtistComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    SearchsongsComponent,
    UpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SongserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
