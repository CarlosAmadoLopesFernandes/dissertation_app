import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class Loader {
    isLoading = false;
    constructor(private loadingController: LoadingController) { }


    // Initialization of loading
  async initloading(message) {
        this.isLoading = true;
        return await this.loadingController.create({
            spinner:"circles",
            message: message,
            translucent:false
        }).then(a => {
            a.present().then(() => {
              if (!this.isLoading) {
                a.dismiss().then(() => console.log('abort presenting'));
              }
            });
          });;
    };

    // Close loading
    async closeloading() {
        this.isLoading = false;
        return await this.loadingController.dismiss().then(() => console.log('dismissed'));
    }
}