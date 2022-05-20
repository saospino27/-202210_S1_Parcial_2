import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Maravilla } from './Maravilla';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MaravillaService {
private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getMaravillas(): Observable<Maravilla[]>{
  return this.http.get<Maravilla[]>(this.apiUrl);
}

}
