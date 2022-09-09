import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CovidTrackerService {

  constructor(private http:HttpClient) { }

  getEvents(): Observable<any> {
    const url = `https://api.covid19api.com/country/south-africa?from=2020-03-01T00:00:00Z&to=2020-12-01T00:00:00Z`;
   return this.http.get(url);
  }
}
