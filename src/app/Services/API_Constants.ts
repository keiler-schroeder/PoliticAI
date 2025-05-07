import { environment } from '../../environments/environment';

export class API_Constants {
    
    static readonly GOOGLE_API_KEY = environment.googleApiKey;
    
    // Google Civic Information API Constants
    static readonly CIVIC_INFO_BASE_URL = 'https://www.googleapis.com/civicinfo/v2/';
    static readonly ELECTION_QUERY = 'elections';
    static readonly VOTER_INFO_QUERY = 'voterinfo';

    //Google Geocoding API Constants
    static readonly GEOCODING_BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/';
}