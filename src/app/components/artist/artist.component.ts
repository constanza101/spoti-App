import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  constructor( private _route: ActivatedRoute ) { 

    this._route.params.subscribe( params => {
      console.log( params['id'] );
    });

  }

}
