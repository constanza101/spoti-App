import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistsFound: any[] = [];


  constructor( private _spotify: SpotifyService) {  }


  search( term: string ) {
    this._spotify.getArtist( term )
      .subscribe( data => {
        this.artistsFound = data;
        console.log(data);
        
      });

  }

}
