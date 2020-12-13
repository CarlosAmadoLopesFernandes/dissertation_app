import { Component, OnInit } from '@angular/core';
import { GooglePlacesService } from 'src/app/services/google-places.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  places: Array<any> = null;
  placesSearchForm: FormGroup;
  constructor(private googlePlacesService: GooglePlacesService, private fb: FormBuilder) {
    this.placesSearchForm = this.fb.group({
      searchText: [null, Validators.required],
    })
  }

  ngOnInit() {
    
    
  }

  onSubmit() {
    this.googlePlacesService.getPlacesByText(this.placesSearchForm.get('searchText').value).subscribe(x => {
      console.log(x);
      if (x['status'] == 'OK') {
        this.places = x['candidates'];
      }
    })
  }

}
