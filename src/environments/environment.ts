// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com/';

export const GOOGLE_CONFIGS = {
  places_api_key: 'AIzaSyAdTtHN9lGip2TNWhUUPoPAL1kVWZCqehY',
  find_place_url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
  place_photo_url: 'https://maps.googleapis.com/maps/api/place/photo'
}

export const AI_URL = 'http://35.197.237.135:60001/10parks/scenario1/random_forest'

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
