import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {GoogleMapsApiService} from "../service/google-maps-api.service";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsApiResolver implements Resolve<boolean> {

  private apiLoaded: Observable<boolean>;

  constructor(private googleMapsApiService: GoogleMapsApiService) {
    this.apiLoaded = of(false);
  }

  resolve(): Observable<boolean> {
    this.apiLoaded = this.googleMapsApiService.loadApi().pipe(
      map(() => true),
      catchError(() => of(false)),
    );
    return this.apiLoaded;
  }
}
