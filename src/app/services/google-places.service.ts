import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { CORS_ANYWHERE_URL, GOOGLE_CONFIGS } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GooglePlacesService {

  constructor(private http: HttpClient) { }


  getPlacesByText(text: string) {


    let httpOptions1 = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': "XMLHttpRequest"
      }),
      params: new HttpParams()
        .set('input', text)
        .set('inputtype', 'textquery')
        .set('fields', 'photos,formatted_address,name,rating,opening_hours,geometry')
        .set('key', GOOGLE_CONFIGS.places_api_key) //
    };

    //return this.http.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json', httpOptions)
    return this.http.get(CORS_ANYWHERE_URL + GOOGLE_CONFIGS.find_place_url, httpOptions1)
  }

  getPlacePhotoByReference(reference: string) {
    console.log(reference);

    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'X-Requested-With': "XMLHttpRequest",
      "Content-Type": "image/jpeg"
    });

    let params = new HttpParams()
      .set('maxwidth', '400')
      .set('photoreference', reference)
      .set('key', GOOGLE_CONFIGS.places_api_key) //

    return this.http.get(CORS_ANYWHERE_URL + GOOGLE_CONFIGS.place_photo_url, { headers: headers, params: params, responseType: 'blob' });
  }
}
