import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
loading:boolean;
artist: any = {};
topTracks: any[] = [];

  constructor( private _route: ActivatedRoute, 
              private _spotify: SpotifyService ) { 
    
    this.loading = true;

    this._route.params.subscribe( params => {
      
      this.getArtist( params['id']);
      this.getTopTracks( params['id']);

      
    });
  }

  getArtist( id: string) {
    this.loading = true;

    this._spotify.getArtist( id )
        .subscribe( artist => {
          this.artist = artist;
          this.loading = false;

        })
  }

getTopTracks( id: string ){
  this._spotify.getTopTracks( id )
    .subscribe ( topTracks =>{
      this.topTracks = topTracks.tracks;
    })
}




}
