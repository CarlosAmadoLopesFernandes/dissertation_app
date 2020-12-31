import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { CORS_ANYWHERE_URL, AI_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private http: HttpClient) {}


  pad(n) {
    return n<10 ? '0'+n : n
  }

  getParkInfos(latitude: string, longitude: string, date: Date) {
    let data = {
      latitude: latitude,
      longitude: longitude,
      date: date.getFullYear() + "-" + this.pad(date.getMonth() + 1) + "-" + this.pad(date.getDate()) + " " + this.pad(date.getHours()) + ":" + this.pad(date.getMinutes()) + ":" + this.pad(date.getSeconds())
    }

    console.log(date);

    return this.http.post(CORS_ANYWHERE_URL + AI_URL, data)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    //return this.http.get('https://api.mocki.io/v1/b043df5a')
  }

  handleError(error) {
    console.log(error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    window.alert(error);
    return throwError(errorMessage);
  }
    
}
