import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor(private _http: HttpClient) {
    console.log('spotify service working');
  }

  getQuery( query: string ) {
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAYfMm2Ea6OgcQ_2AP8diNRzUIq1JfbxJykzXnxAp7rR2k3Vu74CSrkA8PKu1rxMV2xjez7xqJglWB2Y_Q'
    });

    return this._http.get(URL, {headers});
  }

  getNewReleases() {
    const URL_PARAMS = 'browse/new-releases';


    return this.getQuery(URL_PARAMS)
          .pipe( map( data => data['albums'].items));
  }

  getArtists( term: string ) {

    const URL_PARAMS = `search?query=${term}&type=artist&market=ES&offset=0&limit=10`;

    return this.getQuery(URL_PARAMS)
      .pipe( map( data => data['artists'].items));

  }



  getArtist( id: string ) {

    const URL_PARAMS = `artists/${id}`;

    return this.getQuery(URL_PARAMS)
      //.pipe( map( data => data['artists'].items));

  }

}
