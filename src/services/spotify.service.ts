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
      'Authorization': 'Bearer BQAGYuRJCBsbj1DktX7KQF0IQw8iJPvoOpeFqUOBYeJ6Hq4Cnfqj9dVHEOcdjPVColdCT0MdMD-dT24ysS0'
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
