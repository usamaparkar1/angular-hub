import { TestData } from '../../test/models/data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FormSubmissionService {

  constructor(private _http: HttpClient) { }

  avoidDuplicateHttpCalls(productId: string): Observable<TestData> {
    try {
      return this._http.get<TestData>(`avoid-duplicate-http-calls/${productId}`);
    } catch (error) {
      return new Observable<any>();
    }
  }
}