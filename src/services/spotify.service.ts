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
      'Authorization': 'Bearer BQAAzCHw19J4XqrvDU124xcFUfSVXvPbTFuDAInz2FkCYmDTtbUQmn1XGG9IrLJTNGG0ZZfvurXpNKTtMsQ'
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



  getTopTracks( id: string ) {

    const URL_PARAMS = `artists/${ id }/top-tracks`;
    const US = `?country=US`
    return this.getQuery(URL_PARAMS+US)
      //.pipe( map( data => data['artists'].items));

  }

}
