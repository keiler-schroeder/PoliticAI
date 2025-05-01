import { Injectable } from '@angular/core';
import { API_Constants } from '../API_Constants';

@Injectable({
  providedIn: 'root'
})
export class CivicInfoService {

  constructor() { }

  async getVoterInfo() {
    fetch(API_Constants.CIVIC_INFO_BASE_URL + API_Constants.VOTER_INFO_QUERY)
      .then(response => response.json())
      .then(data => {
        console.log("in service ", data);
        return data;
      })
      .catch(error => {
        console.error('Error fetching voter info:', error);
        throw error;
      });
  }
}
