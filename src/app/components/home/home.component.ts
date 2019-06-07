import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  newReleases: any[] = [];
  loading: boolean;

  constructor( private _spotify: SpotifyService) { 
    
    this.loading = true;
    

    this._spotify.getNewReleases()
     .subscribe((data: any) =>{
       this.newReleases = data;
       this.loading = false;


      }
     );

  }
}
