import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Games, Qup } from '../models/qup.model';
import { environment as env } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QupService {

  constructor(private http: HttpClient) { }

  addProfile(data: any): Observable<any> {
    return this.http.post(env.dev.serverUrl, data);
  }

  getProfilesByGame(game: any): Observable<Qup[]> {
    return this.http.get<Qup[]>(`${env.dev.serverUrl}?game=${game}`)
  }

  getSupportedGames(): Observable<Games[]> {
    return this.http.get<Games[]>(`${env.dev.serverUrl}/games`)
  }
}