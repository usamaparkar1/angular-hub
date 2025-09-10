import { firstValueFrom, Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestData } from '../models/data';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(private _http: HttpClient) { }

  async getTestDataFromBackend(productId: string | null): Promise<TestData[]> {

    if (!productId || productId?.trim().length === 0) {
      return [];
    }

    try {
      return firstValueFrom(this._http.get<TestData[]>('some-end-point'));
    } catch (error) {
      return [];
    }
  }

  async saveDuplicateHttpCallsInMemory(productId: string) {
    try {
      return await this._http.get(`save-duplicate-calls-in-memory/${productId}`).pipe(
        shareReplay(1),
        // shareReplay({ bufferSize: 1, refCount: false })
      );
    } catch (error) {
      return null;
    }
  }
}