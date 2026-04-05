import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PortfolioApiService } from '../../../core/services/portfolio-api.service';
import { PortfolioResponse } from '../../../core/models/portfolio.model';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './portfolio-list.html',
  styleUrl: './portfolio-list.css',
})
export class PortfolioListComponent implements OnInit {
  constructor(private router: Router) {}

  private portfolioApi = inject(PortfolioApiService);
  private cdr = inject(ChangeDetectorRef);


  portfolios: PortfolioResponse[] = [];

  ngOnInit(): void {
    this.portfolioApi.getPortfolios().subscribe({
      next: data => {
        console.log('Portfolios from backend ', data);
        this.portfolios = data;

        this.cdr.detectChanges();
      },
      error: err => {
        console.error('Failed to load portfolios:', err);
      }
    })
  }

  openAnalytics(id: number): void {
    this.router.navigate(['/portfolios', id, 'analytics']);

    console.log('Clicked id:', id)
  }
}
