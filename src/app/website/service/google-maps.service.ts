import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";
import apiKeys from '../../../../apikey.json';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  private apiLoaded: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isApiLoaded = this.apiLoaded.asObservable();

  constructor(httpClient: HttpClient) {
    const key = environment.googleMapsApiURL + apiKeys.googleMaps;
    httpClient
      .jsonp(key, 'callback')
      .subscribe(() => {
        this.apiLoaded.next(true);
      });
  }
}
