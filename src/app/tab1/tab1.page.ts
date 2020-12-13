import { Component, OnInit } from '@angular/core';
import { ParkingService } from 'src/app/services/parking.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Loader } from '../utils/loader';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showParkingInfo: Boolean;
  parkingForm: FormGroup;
  parkingArray;

  constructor(private parkingService: ParkingService, private fb: FormBuilder, private loader: Loader) {
    this.showParkingInfo = false;
    this.parkingForm = this.fb.group({
      latitude: [50.8503, Validators.required],
      longitude: [4.3517, Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required]
    })
  }

  onSubmit() {
    console.log(this.parkingForm.get('date').value);
    console.log(this.parkingForm.get('time').value);
    this.loader.initloading("");
    let latitude = this.parkingForm.get('latitude').value
    let longitude = this.parkingForm.get('longitude').value;
    let date = this.parkingForm.get('date').value + " " + this.parkingForm.get('time').value
    console.log(date);
    var d = new Date(date)

    this.parkingService.getParkInfos(latitude, longitude, d).subscribe(response => {

      this.showParkingInfo = true;
      this.parkingArray = response;
      this.loader.closeloading();
    });
    
  }
}
