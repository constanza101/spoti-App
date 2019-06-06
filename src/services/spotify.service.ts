import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  

  constructor(private _http: HttpClient) { 
    console.log('spotify service working');
  }

  getNewReleases(){
    const URL = 'https://api.spotify.com/v1/browse/new-releases';
    let headers = new HttpHeaders({
      'Authorization': 'Bearer BQAEXcO4bFf_eG_3ZZxdWT43AHfbzIK0cRIj-coCaoq2UCNYcYfuXrOEGZrTxm_jW7gCwdnBE7aD259ciqU'
    });

    return this._http.get(URL, {headers})
      .pipe( map( data => {
        console.log(data);
        return data['albums'].items;
      }));
/*     .subscribe(data => console.log(data)
      );
      // subscribe method will be done in the components
*/
  }

  getArtist( term: string ){
    
    const URL = `https://api.spotify.com/v1/search?query=${term}&type=artist&market=ES&offset=0&limit=10`
  
    let headers = new HttpHeaders({
      'Authorization': 'Bearer BQAEXcO4bFf_eG_3ZZxdWT43AHfbzIK0cRIj-coCaoq2UCNYcYfuXrOEGZrTxm_jW7gCwdnBE7aD259ciqU'
    });


    return this._http.get(URL, {headers})
      .pipe( map( data => {
        console.log(data['artists'].items);
        return data['artists'].items;

      }));

  }

}
