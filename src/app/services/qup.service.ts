import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Qup } from '../models/qup.model';
import { environment as env } from "../../environments/environment";

const baseUrl = 'http://localhost:8080/api/qup'

@Injectable({
  providedIn: 'root'
})
export class QupService {

  constructor(private http: HttpClient) { }

  addProfile(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  getProfilesByGame(game: any): Observable<Qup[]> {
    return this.http.get<Qup[]>(`${env.dev.serverUrl}?game=${game}`)
  }
}