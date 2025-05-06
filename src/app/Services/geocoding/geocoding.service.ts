import { Injectable } from '@angular/core';
import { RequestHandler } from '../request-handler';
import { API_Constants } from '../API_Constants';


@Injectable({
  providedIn: 'root'
})
export class GeocodingService extends RequestHandler {

  async getAddressFromCoordinates(lat: number, lng: number) {
    const requestURL = API_Constants.GEOCODING_BASE_URL + 'json?latlng=' + lat + ',' + lng + '&key=' + API_Constants.GOOGLE_API_KEY + '&location_type=ROOFTOP&result_type=street_address';
    return await this.getRequest(requestURL);
  }
}
