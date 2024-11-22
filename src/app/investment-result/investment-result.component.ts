import { Component, Input } from '@angular/core';
import { type InvestmentResult } from '../investment-results.model';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  @Input() results?: InvestmentResult[];
}
