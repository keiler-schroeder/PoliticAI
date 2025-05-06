import { Injectable } from '@angular/core';
import { API_Constants } from '../API_Constants';
import { RequestHandler } from '../request-handler';

@Injectable({
  providedIn: 'root'
})
export class CivicInfoService extends RequestHandler {

  async getElections() {
    const requestURL = API_Constants.CIVIC_INFO_BASE_URL + API_Constants.ELECTION_QUERY + '?key=' + API_Constants.GOOGLE_API_KEY;
    return await this.getRequest(requestURL);
  }
  
  async getVoterInfo(address: string) {
    const encodedAddress = encodeURIComponent(address); // URL-encode the address
    const requestURL = API_Constants.CIVIC_INFO_BASE_URL + API_Constants.VOTER_INFO_QUERY + '?key=' + API_Constants.GOOGLE_API_KEY + '&address=' + encodedAddress;
    return await this.getRequest(requestURL);
  }
}
