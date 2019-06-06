import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor( private _spotify: SpotifyService) {  }

  search( term: string ) {
    console.log( term );
    this._spotify.getArtist( term )
      .subscribe( data => {
        console.log(data["artists"].items );
        
      })
    
  }

}
