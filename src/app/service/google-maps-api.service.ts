import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import apiKey from "../../../apikey.json"

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsApiService {

  constructor(private httpClient: HttpClient) {
  }

  loadApi() {
    return this.httpClient.jsonp(environment.googleMapsApiURL + apiKey.googleMaps, 'callback');
  }
}
