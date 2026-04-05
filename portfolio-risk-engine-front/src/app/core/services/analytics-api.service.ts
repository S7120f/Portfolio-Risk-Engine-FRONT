import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PortfolioHoldingVolatilityResponse {
  ticker: string;
  quantity: number;
  assetType: 'STOCK' | 'ETF' | 'CRYPTO';
  latestPrice: number;
  marketValue: number;
  weight: number;
  assetVolatility: number;
}

export interface PortfolioVolatilityResponse {
  portfolioId: number;
  portfolioName: string;
  totalValue: number;
  portfolioVolatility: number;
  holdings: PortfolioHoldingVolatilityResponse[];
}

export interface PortfolioMaxDrawdownResponse {
  portfolioId: number;
  portfolioName: string;
  maxDrawdown: number;
  peakValue: number;
  peakDate: string;
  troughValue: number;
  troughDate: string;
}

export interface PortfolioAssetCorrelationResponse {
  tickerA: string;
  tickerB: string;
  correlation: number;
}

export interface PortfolioCorrelationResponse {
  portfolioId: number;
  portfolioName: string;
  correlations: PortfolioAssetCorrelationResponse[];
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsApiService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/api/analytics';

  getPortfolioVolatility(portfolioId: number): Observable<PortfolioVolatilityResponse> {
    return this.http.get<PortfolioVolatilityResponse>(
      `${this.baseUrl}/portfolio/${portfolioId}/volatility`,
    );
  }

  getPortfolioMaxDrawdown(portfolioId: number): Observable<PortfolioMaxDrawdownResponse> {
    return this.http.get<PortfolioMaxDrawdownResponse>(
      `${this.baseUrl}/portfolio/${portfolioId}/max-drawdown`,
    );
  }

  getPortfolioCorrelation(portfolioId: number): Observable<PortfolioCorrelationResponse> {
    return this.http.get<PortfolioCorrelationResponse>(
      `${this.baseUrl}/portfolio/${portfolioId}/correlation`,
    );
  }
}
