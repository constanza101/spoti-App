import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { 
    console.log('spotify service working');
  }

  getNewReleases(){
    const URL = 'https://api.spotify.com/v1/browse/new-releases';
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDCiQSP-sHSYC9r1MOhf396N0WGXOynY8lT72MMpoQzRokGiAScLyGCAQwXPduyiSZbGM2H33t0DwWoqo8'
    });

    return this._http.get(URL, {headers});
/*     .subscribe(data => console.log(data)
      );
      // subscribe method will be done in the components
*/

  }
}
