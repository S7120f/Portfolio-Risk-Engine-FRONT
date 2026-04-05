import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PortfolioResponse } from '../models/portfolio.model'


@Injectable({
  providedIn: 'root',
})
export class PortfolioApiService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/api/portfolios';

  getPortfolios(): Observable<PortfolioResponse[]> {
    return this.http.get<PortfolioResponse[]>(this.baseUrl);
  }
}
