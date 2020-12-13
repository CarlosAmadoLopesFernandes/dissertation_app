import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare let google: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  currentLocation: any = {
    lat: 0,
    lng: 0
  }

  constructor(private geolocation: Geolocation) {

  }

  ionViewDidEnter(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
    });
    const map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    this.directionsDisplay.setMap(map);

    const that = this;
    this.directionsService.route({
      origin: this.currentLocation,
      destination: new google.maps.LatLng(50.8503, 4.3517),
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }


}
