import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { GooglePlacesService } from 'src/app/services/google-places.service';
import { ParkingService } from 'src/app/services/parking.service';
import { Loader } from '../utils/loader';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  step: string;
  //places: Array<any> = null;
  places: Array<any> = [
    {
       "formatted_address" : "Praça de Almeida Garrett, 4000-069 Porto, Portugal",
       "geometry" : {
          "location" : {
             "lat" : 41.1456657,
             "lng" : -8.610530599999999
          },
          "viewport" : {
             "northeast" : {
                "lat" : 41.14702662989272,
                "lng" : -8.609258270107278
             },
             "southwest" : {
                "lat" : 41.14432697010728,
                "lng" : -8.611957929892721
             }
          }
       },
       "name" : "Porto São Bento",
       "rating" : 4.7
    },
    {
       "formatted_address" : "São Bento, São Bento do Tocantins - State of Tocantins, 77958-000, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -5.913349999999999,
             "lng" : -48.002121
          },
          "viewport" : {
             "northeast" : {
                "lat" : -5.9022513,
                "lng" : -47.9861136
             },
             "southwest" : {
                "lat" : -5.9244485,
                "lng" : -48.01812839999999
             }
          }
       },
       "name" : "São Bento"
    },
    {
       "formatted_address" : "4000-069 Porto, Portugal",
       "geometry" : {
          "location" : {
             "lat" : 41.1452254,
             "lng" : -8.6110173
          },
          "viewport" : {
             "northeast" : {
                "lat" : 41.14657522989272,
                "lng" : -8.609667470107276
             },
             "southwest" : {
                "lat" : 41.14387557010727,
                "lng" : -8.61236712989272
             }
          }
       },
       "name" : "São Bento",
       "rating" : 4.5
    },
    {
       "formatted_address" : "São Bento, Portugal",
       "geometry" : {
          "location" : {
             "lat" : 39.5272851,
             "lng" : -8.7900828
          },
          "viewport" : {
             "northeast" : {
                "lat" : 39.535891,
                "lng" : -8.774075399999999
             },
             "southwest" : {
                "lat" : 39.5186782,
                "lng" : -8.8060902
             }
          }
       },
       "name" : "São Bento"
    },
    {
       "formatted_address" : "Largo de São Bento, 109 - Centro Histórico de São Paulo, São Paulo - SP, 01029-010, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -23.5443802,
             "lng" : -46.6341235
          },
          "viewport" : {
             "northeast" : {
                "lat" : -23.54280357010728,
                "lng" : -46.63313007010728
             },
             "southwest" : {
                "lat" : -23.54550322989272,
                "lng" : -46.63582972989273
             }
          }
       },
       "name" : "São Bento",
       "opening_hours" : {
          "open_now" : true
       },
       "rating" : 4.4
    },
    {
       "formatted_address" : "São Bento - Jardim São Bento, São Paulo - State of São Paulo, 02519-200, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -23.5027307,
             "lng" : -46.65039729999999
          },
          "viewport" : {
             "northeast" : {
                "lat" : -23.492498,
                "lng" : -46.6343899
             },
             "southwest" : {
                "lat" : -23.5129626,
                "lng" : -46.6664047
             }
          }
       },
       "name" : "São Bento"
    },
    {
       "formatted_address" : "Av. de São Bento da Porta Aberta 2967, 4845-028, Portugal",
       "geometry" : {
          "location" : {
             "lat" : 41.6902161,
             "lng" : -8.2033404
          },
          "viewport" : {
             "northeast" : {
                "lat" : 41.69151997989272,
                "lng" : -8.202263520107278
             },
             "southwest" : {
                "lat" : 41.68882032010728,
                "lng" : -8.204963179892722
             }
          }
       },
       "name" : "Church São Bento da Porta Aberta",
       "rating" : 4.7
    },
    {
       "formatted_address" : "São Bento, State of Maranhão, 65235-000, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -2.7034264,
             "lng" : -44.8365136
          },
          "viewport" : {
             "northeast" : {
                "lat" : -2.6866327,
                "lng" : -44.8068192
             },
             "southwest" : {
                "lat" : -2.7153585,
                "lng" : -44.8531785
             }
          }
       },
       "name" : "São Bento"
    },
    {
       "formatted_address" : "São Bento - State of Paraíba, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -6.4525359,
             "lng" : -37.4894776
          },
          "viewport" : {
             "northeast" : {
                "lat" : -6.3908746,
                "lng" : -37.3812436
             },
             "southwest" : {
                "lat" : -6.533297999999999,
                "lng" : -37.5854909
             }
          }
       },
       "name" : "São Bento"
    },
    {
       "formatted_address" : "S. Bento, Portugal",
       "geometry" : {
          "location" : {
             "lat" : 38.661298,
             "lng" : -27.2044064
          },
          "viewport" : {
             "northeast" : {
                "lat" : 38.6677102,
                "lng" : -27.199078
             },
             "southwest" : {
                "lat" : 38.6536021,
                "lng" : -27.2099332
             }
          }
       },
       "name" : "S. Bento"
    },
    {
       "formatted_address" : "São Bento, State of Paraíba, 58865-000, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -6.4913535,
             "lng" : -37.4504266
          },
          "viewport" : {
             "northeast" : {
                "lat" : -6.4640936,
                "lng" : -37.4401237
             },
             "southwest" : {
                "lat" : -6.5081907,
                "lng" : -37.4688065
             }
          }
       },
       "name" : "São Bento"
    },
    {
       "formatted_address" : "Fazenda Bento Moreira AL 105 Km 6, Boca da Mata - AL, 57680-000, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -9.663338,
             "lng" : -36.084506
          },
          "viewport" : {
             "northeast" : {
                "lat" : -9.661985020107277,
                "lng" : -36.08315642010728
             },
             "southwest" : {
                "lat" : -9.664684679892721,
                "lng" : -36.08585607989272
             }
          }
       },
       "name" : "Balneário Águas de São Bento",
       "opening_hours" : {
          "open_now" : false
       },
       "rating" : 4.8
    },
    {
       "formatted_address" : "Largo de São Bento, s/nº - Centro Histórico de São Paulo, São Paulo - SP, 01029-010, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -23.543843,
             "lng" : -46.6338643
          },
          "viewport" : {
             "northeast" : {
                "lat" : -23.54249317010728,
                "lng" : -46.63251447010727
             },
             "southwest" : {
                "lat" : -23.54519282989272,
                "lng" : -46.63521412989272
             }
          }
       },
       "name" : "Monastery of St. Benedict",
       "rating" : 4.8
    },
    {
       "formatted_address" : "Av. Dom Afonso Henriques, 4000-069 Porto, Portugal",
       "geometry" : {
          "location" : {
             "lat" : 41.1442942,
             "lng" : -8.6105935
          },
          "viewport" : {
             "northeast" : {
                "lat" : 41.14554347989272,
                "lng" : -8.609267070107279
             },
             "southwest" : {
                "lat" : 41.14284382010727,
                "lng" : -8.611966729892723
             }
          }
       },
       "name" : "São Bento station",
       "rating" : 4.6
    },
    {
       "formatted_address" : "São Bento do Sul, State of Santa Catarina, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -26.2500365,
             "lng" : -49.3835566
          },
          "viewport" : {
             "northeast" : {
                "lat" : -26.1889207,
                "lng" : -49.3077032
             },
             "southwest" : {
                "lat" : -26.2959858,
                "lng" : -49.4709852
             }
          }
       },
       "name" : "São Bento do Sul"
    },
    {
       "formatted_address" : "Serra de São Bento, State of Rio Grande do Norte, 59214-000, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -6.417421399999999,
             "lng" : -35.7040133
          },
          "viewport" : {
             "northeast" : {
                "lat" : -6.4063332,
                "lng" : -35.6880059
             },
             "southwest" : {
                "lat" : -6.428509399999999,
                "lng" : -35.7200207
             }
          }
       },
       "name" : "Serra de São Bento"
    },
    {
       "formatted_address" : "São Bento, Portugal",
       "geometry" : {
          "location" : {
             "lat" : 39.5272851,
             "lng" : -8.7900828
          },
          "viewport" : {
             "northeast" : {
                "lat" : 39.5598453,
                "lng" : -8.7289315
             },
             "southwest" : {
                "lat" : 39.475688,
                "lng" : -8.8174104
             }
          }
       },
       "name" : "São Bento"
    },
    {
       "formatted_address" : "São Bento, Boa Vista - State of Roraima, Brazil",
       "geometry" : {
          "location" : {
             "lat" : 2.7826753,
             "lng" : -60.7084901
          },
          "viewport" : {
             "northeast" : {
                "lat" : 2.7932154,
                "lng" : -60.701241
             },
             "southwest" : {
                "lat" : 2.7773104,
                "lng" : -60.7229001
             }
          }
       },
       "name" : "São Bento"
    },
    {
       "formatted_address" : "R. de São Bento da Vitória 45, 4050-542 Porto, Portugal",
       "geometry" : {
          "location" : {
             "lat" : 41.1439307,
             "lng" : -8.6159219
          },
          "viewport" : {
             "northeast" : {
                "lat" : 41.14526467989272,
                "lng" : -8.614467770107279
             },
             "southwest" : {
                "lat" : 41.14256502010728,
                "lng" : -8.617167429892723
             }
          }
       },
       "name" : "Mosteiro de São Bento da Vitória",
       "opening_hours" : {
          "open_now" : false
       },
       "rating" : 4.6
    },
    {
       "formatted_address" : "R. Dom Gerardo, 68 - Centro, Rio de Janeiro - RJ, 20090-030, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -22.8969941,
             "lng" : -43.178014
          },
          "viewport" : {
             "northeast" : {
                "lat" : -22.89613002010728,
                "lng" : -43.17718604999999
             },
             "southwest" : {
                "lat" : -22.89882967989272,
                "lng" : -43.18049785
             }
          }
       },
       "name" : "Nossa Senhora do Monserrate do Rio de Janeiro",
       "opening_hours" : {
          "open_now" : false
       },
       "rating" : 4.8
    },
    {
       "formatted_address" : "São Bento, Lajeado - RS, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -29.46594649999999,
             "lng" : -52.0374321
          },
          "viewport" : {
             "northeast" : {
                "lat" : -29.4451384,
                "lng" : -52.0043015
             },
             "southwest" : {
                "lat" : -29.4760948,
                "lng" : -52.0489857
             }
          }
       },
       "name" : "São Bento"
    },
    {
       "formatted_address" : "São Bento - State of Maranhão, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -2.7016884,
             "lng" : -44.8406758
          },
          "viewport" : {
             "northeast" : {
                "lat" : -2.6593368,
                "lng" : -44.7861339
             },
             "southwest" : {
                "lat" : -2.9116957,
                "lng" : -45.2297795
             }
          }
       },
       "name" : "São Bento"
    },
    {
       "formatted_address" : "São Bento, Bento Gonçalves - RS, 95700-000, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -29.1707181,
             "lng" : -51.50646649999999
          },
          "viewport" : {
             "northeast" : {
                "lat" : -29.1677438,
                "lng" : -51.5011193
             },
             "southwest" : {
                "lat" : -29.1724308,
                "lng" : -51.5129256
             }
          }
       },
       "name" : "São Bento"
    },
    {
       "formatted_address" : "São Bento, Fortaleza - State of Ceará, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -3.860494,
             "lng" : -38.4876205
          },
          "viewport" : {
             "northeast" : {
                "lat" : -3.839855,
                "lng" : -38.4737721
             },
             "southwest" : {
                "lat" : -3.864814,
                "lng" : -38.4934687
             }
          }
       },
       "name" : "São Bento"
    },
    {
       "formatted_address" : "São Bento, 3810-814 Oliveirinha, Portugal",
       "geometry" : {
          "location" : {
             "lat" : 40.5852489,
             "lng" : -8.596576199999999
          },
          "viewport" : {
             "northeast" : {
                "lat" : 40.59372219999999,
                "lng" : -8.5805688
             },
             "southwest" : {
                "lat" : 40.5767746,
                "lng" : -8.612583599999999
             }
          }
       },
       "name" : "São Bento"
    },
    {
       "formatted_address" : "R. de São Bento 347, 1269-084 Lisboa, Portugal",
       "geometry" : {
          "location" : {
             "lat" : 38.7188421,
             "lng" : -9.155734799999999
          },
          "viewport" : {
             "northeast" : {
                "lat" : 38.72019462989272,
                "lng" : -9.154324470107277
             },
             "southwest" : {
                "lat" : 38.71749497010727,
                "lng" : -9.15702412989272
             }
          }
       },
       "name" : "Lisbon São Bento Hotel",
       "rating" : 4.3
    },
    {
       "formatted_address" : "Parque Nacional Peneda Gerês, Av. de São Bento da Porta Aberta Nº2993, 4845-028, Portugal",
       "geometry" : {
          "location" : {
             "lat" : 41.6907314,
             "lng" : -8.2046641
          },
          "viewport" : {
             "northeast" : {
                "lat" : 41.69194647989272,
                "lng" : -8.202996970107279
             },
             "southwest" : {
                "lat" : 41.68924682010728,
                "lng" : -8.205696629892723
             }
          }
       },
       "name" : "Hotel São Bento da Porta Aberta",
       "opening_hours" : {
          "open_now" : true
       },
       "rating" : 4.5
    },
    {
       "formatted_address" : "São Bento do Una, State of Pernambuco, 55370-000, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -8.523630599999999,
             "lng" : -36.4431999
          },
          "viewport" : {
             "northeast" : {
                "lat" : -8.5113746,
                "lng" : -36.4304977
             },
             "southwest" : {
                "lat" : -8.5373091,
                "lng" : -36.4534734
             }
          }
       },
       "name" : "São Bento do Una"
    },
    {
       "formatted_address" : "R. de São Bento 56, 1200-815 Lisboa, Portugal",
       "geometry" : {
          "location" : {
             "lat" : 38.7108334,
             "lng" : -9.1525654
          },
          "viewport" : {
             "northeast" : {
                "lat" : 38.71218247989273,
                "lng" : -9.151248620107278
             },
             "southwest" : {
                "lat" : 38.70948282010729,
                "lng" : -9.153948279892722
             }
          }
       },
       "name" : "Sao Bento Best Apartments",
       "opening_hours" : {
          "open_now" : false
       },
       "rating" : 4.5
    },
    {
       "formatted_address" : "São Bento do Sapucaí, State of São Paulo, 12490-000, Brazil",
       "geometry" : {
          "location" : {
             "lat" : -22.6874246,
             "lng" : -45.7319876
          },
          "viewport" : {
             "northeast" : {
                "lat" : -22.679474,
                "lng" : -45.719454
             },
             "southwest" : {
                "lat" : -22.707222,
                "lng" : -45.7446919
             }
          }
       },
       "name" : "São Bento do Sapucaí"
    }
 ];
  selectedPlaceIndex: number = null;
  placesSearchForm: FormGroup;
  parkingForm: FormGroup;

  showParkingInfo: Boolean = false;
  parkingArray;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private googlePlacesService: GooglePlacesService,
    private loader: Loader,
    private parkingService: ParkingService
  ) {
    this.placesSearchForm = this.fb.group({
      searchText: [null, Validators.required],
    })

    this.parkingForm = this.fb.group({
      date: [null, Validators.required],
      time: [null, Validators.required]
    })
  }

  ngOnInit() {
    console.log('done');
    this.router.navigate([], { 
      relativeTo: this.route,
      queryParams: {
        step: '1'
      },
    })

    this.route.queryParams.subscribe(params => {
      this.step = params['step'];
    });

  }

  next() {
    let x = parseInt(this.step) + 1;
    this.router.navigate([], {
      queryParamsHandling: 'merge',
      relativeTo: this.route,
      queryParams: {
        step: x
      },
    })
  }

  previous() {
    let x = parseInt(this.step) - 1;
    this.router.navigate([], { 
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: {
        step: x
      },
    })
  }

  getPlacesByText() {
    this.googlePlacesService.getPlacesByText(this.placesSearchForm.get('searchText').value).subscribe(x => {
      console.log(x);
      if (x['status'] == 'OK') {
        this.places = x['candidates'];
      }
    })
  }

  selectPlace(place, index) {
    this.selectedPlaceIndex = index;

  
  }

  getParksData() {
    this.loader.initloading("");
    //let latitude = this.parkingForm.get('latitude').value
    //let longitude = this.parkingForm.get('longitude').value;
    let latitude = this.places[this.selectedPlaceIndex]['geometry']['location']['lat'];
    let longitude = this.places[this.selectedPlaceIndex]['geometry']['location']['lng'];
    let dateObject = new Date(this.parkingForm.get('date').value);
    let dateString = dateObject.toLocaleDateString();
    console.log(dateString);

    let dateObject2 = new Date(this.parkingForm.get('time').value);
    let dateString2 = dateObject2.toLocaleTimeString();
    let finalDateString = dateString + " " + dateString2;
    console.log(finalDateString);
    var d = new Date(finalDateString)

    this.parkingService.getParkInfos(latitude, longitude, d).subscribe(response => {

      this.showParkingInfo = true;
      this.parkingArray = response;
      this.loader.closeloading();
    });
  }

}
