import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesService {

  constructor(private http: HttpClient) { }


  getPlacesByText(text: string) {


    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'X-Requested-With': "XMLHttpRequest"
      }),
      params:  new HttpParams()
      .set('input', text)
      .set('inputtype', 'textquery')
      .set('fields', 'photos,formatted_address,name,rating,opening_hours,geometry')
      .set('key', 'AIzaSyAdTtHN9lGip2TNWhUUPoPAL1kVWZCqehY') //
    };
    
    //return this.http.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json', httpOptions)
    return this.http.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json', httpOptions)

  }
}
