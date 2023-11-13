import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreConfig } from './core.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(
    private http: HttpClient
  ) {}
public getOnfidoToken(_id:string): Observable<any> {
    const url = CoreConfig.getPath() + `?${_id}`;
    return this.http.post(url, {}, {
        headers: new HttpHeaders().set(
          'Authorization',
          CoreConfig.getAuthtoken()
        ),
      });
  }
}
