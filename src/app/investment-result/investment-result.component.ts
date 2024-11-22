import { Component, inject, input } from '@angular/core';
import { type InvestmentResult } from '../investment-results.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  investmentService = inject(InvestmentService);

  results = this.investmentService.resultsData;
}
