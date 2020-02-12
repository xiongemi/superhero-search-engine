import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Hero } from '../../types/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HerosService {
  constructor(private httpClient: HttpClient) { }

  getHeros(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(environment.herosApis.all);
  }
}
