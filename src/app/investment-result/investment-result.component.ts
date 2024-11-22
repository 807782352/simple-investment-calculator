import { Component, input, Input } from '@angular/core';
import { type InvestmentResult } from '../investment-results.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  // @Input() results?: InvestmentResult[];
  results = input<InvestmentResult[]>()
}
