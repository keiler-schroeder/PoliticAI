import { inject } from "@angular/core";
import { SessionService } from "./session/session.service";

export class RequestHandler {
  sessionService: SessionService = inject(SessionService);
  
  constructor() {}

  async getRequest(endpoint: string) {
    if(this.sessionService.getApiCache().containsKey(endpoint)) {
      console.log("Fetching request from cache: ", endpoint);
      return this.sessionService.getApiCache().getValue(endpoint);
    }
    else{
      console.log("Fetching request from server: ", endpoint);
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.sessionService.addToApiCache(endpoint, data);
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }

  async postRequest(endpoint: string, data: any) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }
}