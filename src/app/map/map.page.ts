import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LaunchNavigator, LaunchNavigatorOptions  } from '@ionic-native/launch-navigator/ngx';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

declare let google: any;

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  currentLocation: any = {
    lat: 0,
    lng: 0
  }
  destinationLocation: any = {
    lat: 0,
    lng: 0
  }

  constructor(
    private geolocation: Geolocation,
    private launchNavigator: LaunchNavigator,
    private router: Router
  ) {
    console.log(this.router.getCurrentNavigation().extras.state);
    this.destinationLocation.lat = this.router.getCurrentNavigation().extras.state.latitude;
    this.destinationLocation.lng = this.router.getCurrentNavigation().extras.state.longitude;
  }


  ionViewDidEnter(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;

      const map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 7,
        center: {lat: 41.85, lng: -87.65}
      });
      this.directionsDisplay.setMap(map);
  
      const that = this;
      this.directionsService.route({
        origin: this.currentLocation,
        destination: new google.maps.LatLng(this.destinationLocation.lat, this.destinationLocation.lng),
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          that.directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    });
    
  }

  navigateLocation() {
    let options: LaunchNavigatorOptions = { 
      app: this.launchNavigator.APP.GOOGLE_MAPS,
      start:[ this.currentLocation.lat, this.currentLocation.lng]
    };
    let destination = [this.destinationLocation.lat, this.destinationLocation.lng]
    this.launchNavigator.navigate(destination,options)
    .then(success =>{
      console.log(success);
    },error=>{
      console.log(error);
    })
  }

  reset() {
    this.router.navigateByUrl('/tab4');
  }


}
