import { Injectable } from '@angular/core';
import { Dictionary } from 'typescript-collections';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  locationLatitude: number = -1;
  locationLongitude: number = -1;
  locationAddress: string = '';

  apiCache: Dictionary<string, any> = new Dictionary<string, any>();

  constructor() { }

  getApiCache() {
    return this.apiCache;
  }

  addToApiCache(request: string, response: any) {
    if (!this.apiCache.containsKey(request)) {
      this.apiCache.setValue(request, response);
    }
    else{
      console.log("Request already in cache: ", request);
    }
  }
}
