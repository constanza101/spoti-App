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
      'Authorization': 'Bearer BQDO9p-pmIUHwrpc6j7aMnIhrHJIOmJk1MaHhGpAMwXvjF_O_v48t_cp5unClx87a5o3Zfr1gK1R0Xw8UwI'
    });

    return this._http.get(URL, {headers});
  }

  getNewReleases() {
    const URL_PARAMS = 'browse/new-releases';


    return this.getQuery(URL_PARAMS)
          .pipe( map( data => data['albums'].items));
  }

  getArtist( term: string ) {

    const URL_PARAMS = `search?query=${term}&type=artist&market=ES&offset=0&limit=10`;

    return this.getQuery(URL_PARAMS)
      .pipe( map( data => data['artists'].items));

  }

}
