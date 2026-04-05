import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  AnalyticsApiService,
  PortfolioCorrelationResponse,
  PortfolioMaxDrawdownResponse,
  PortfolioVolatilityResponse,
} from '../../../core/services/analytics-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-analytics-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics-dashboard.html',
  styleUrl: './analytics-dashboard.css',
})
export class AnalyticsDashboard implements OnInit {
  private route = inject(ActivatedRoute);
  private analyticsApi = inject(AnalyticsApiService);
  private cdr = inject(ChangeDetectorRef);

  volatility?: PortfolioVolatilityResponse;
  drawdown?: PortfolioMaxDrawdownResponse;
  correlation?: PortfolioCorrelationResponse;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    forkJoin({
      volatility: this.analyticsApi.getPortfolioVolatility(id),
      drawdown: this.analyticsApi.getPortfolioMaxDrawdown(id),
      correlation: this.analyticsApi.getPortfolioCorrelation(id),
    }).subscribe({
      next: (result) => {
        console.log('Data from backend', result);
        this.volatility = result.volatility;
        this.drawdown = result.drawdown;
        this.correlation = result.correlation;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load portfolios:', err);
      },
    });
  }

  formatNumber(value: number | null | undefined): string {
    return value != null ? value.toFixed(6) : '-';
  }

  formatPercent(value: number | string | null | undefined): string {
    if (value == null) return '-';
    const num = Number(value);
    return Number.isFinite(num) ? `${(num * 100).toFixed(2)}%` : '-';
  }
}
