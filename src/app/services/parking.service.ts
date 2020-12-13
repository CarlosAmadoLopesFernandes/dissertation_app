import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private http: HttpClient) {}

  test() {
    this.http.get('https://cors-anywhere.herokuapp.com/http://35.197.237.135:60001/').subscribe(x => {
      console.log(x);
    })
  }


  pad(n) {
    return n<10 ? '0'+n : n
  }

  getParkInfos(latitude: string, longitude: string, date: Date) {
    let data = {
      latitude: latitude,
      longitude: longitude,
      date: date.getFullYear() + "-" + this.pad(date.getMonth()) + "-" + this.pad(date.getDate()) + " " + this.pad(date.getHours()) + ":" + this.pad(date.getMinutes()) + ":" + this.pad(date.getSeconds())
    }

    return this.http.post('https://cors-anywhere.herokuapp.com/http://35.197.237.135:60001/10parks/scenario1/random_forest', data)
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
