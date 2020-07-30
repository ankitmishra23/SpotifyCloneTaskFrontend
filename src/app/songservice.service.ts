import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SongserviceService implements CanActivate {

  constructor(private http:HttpClient,private router: Router) {     
  }
  canActivate(a):boolean{    
    if (a) {
      return true;
    } else {      
      return false;
    }
  }

  songNameString;
  username;
  searchedSong;
  
  public SetUserName(str)
  {
    this.username=str;
  }
  
  public setValue(i)
  {
    this.songNameString=i;
  }
  public play()
  {    
    const songplay=document.getElementById('audio_button2') as HTMLAudioElement;
    songplay.src="assets/songs/"+this.songNameString+".mp3";
    songplay.play();
  }
  public FetchArtistData(){
    return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getartists");
  }

  public PostUserData(user)
  {    
      return this.http.post("https://spotifyclone.azurewebsites.net/api/Spotify/adduser",user);
  }

  public FetchArtistByName(str)
  {
    return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getartistbyname/"+str);

  }
  public FetchAllFollowedArtist()
  {
    return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getfollowedartist");

  }

  public FetchAlbums()
  {
    return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getalbum");
  }

  public FetchAlbumSongsById(i)
  {
    return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getalbumsongsbyid/"+i);
  }

  public GetAuth(name,pass)
  {
    return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getuserauthentication/"+name+"/"+pass);
  }

  public GetUserDetailsByName(name)
  {
    return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getuserdetailsbyname/"+name);
  }
  public AddPlaylist(playlist)
  {
    return this.http.post("https://spotifyclone.azurewebsites.net/api/Spotify/addplaylist",playlist);
  }

  public GetPlaylist(id)
  {
    return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getplaylistbyid/"+id);
  }

  public GetPlaylistSongs(userId,playlistId)
  {
    return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getplaylistsongs/"+userId+"/"+playlistId);
  }

  public GetSongId(songName)
  {
    return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getsongidbyname/"+songName);
  }
  public GetPlaylistId(playlistName)
  {
    return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getplaylistidbyname/"+playlistName);
  }
  public AddPlaylistSongs(parameters)
  {
    return this.http.post("https://spotifyclone.azurewebsites.net/api/Spotify/addsongstoplaylist",parameters);
  }
  public RemoveSongFromPlaylist(songId,playlistId)
  {
      return this.http.delete("https://spotifyclone.azurewebsites.net/api/Spotify/removesong/"+songId+"/"+playlistId);
  }
public FetchArtistFollowedByUserId(userId)
{
  return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getuserfollowings/"+userId);  
}
public AddFollowings(parameters)
{
  return this.http.post("https://spotifyclone.azurewebsites.net/api/Spotify/followartist",parameters);
}
public FetchSongNameByName(songName)
{
  return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getsongnamebyname/"+songName);
}
public FetchUnfollowedArtist(userId)
{
  return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getunfollowedartist/"+userId);
}
public UnfollowArtist(userId,artistId)
{
  return this.http.delete("https://spotifyclone.azurewebsites.net/api/Spotify/unfollowartist/"+userId+"/"+artistId);
}

public GetPlaylistIdByUserId(playlist,userId)
{
  return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getplaylistidbyuserid/"+playlist+"/"+userId);
}

public GetPlaylistById(userId)
{
  return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getplaylistbyid/"+userId);
}

public GetAllSongs()
{
  return this.http.get("https://spotifyclone.azurewebsites.net/api/Spotify/getallsongs");
}

public UpdateUser(user,userId)
{
  return this.http.put("https://spotifyclone.azurewebsites.net/api/Spotify/updateuser/"+userId,user);
}
}
