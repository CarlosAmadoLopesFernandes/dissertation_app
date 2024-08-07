import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapPage } from './map.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';

import { MapPageRoutingModule } from './map-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MapPage }]),
    MapPageRoutingModule,
  ],
  declarations: [MapPage],
  providers: [ 
    Geolocation, 
    LaunchNavigator
  ]
})
export class MapPageModule {}
