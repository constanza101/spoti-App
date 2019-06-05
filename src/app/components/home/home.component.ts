import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  newReleases: any[] = [];

  constructor( private _spotify: SpotifyService) { 
   
     this._spotify.getNewReleases()
     .subscribe((data: any) =>{
       console.log(data.albums.items);
       this.newReleases = data.albums.items;

      }
     );

  }
}
