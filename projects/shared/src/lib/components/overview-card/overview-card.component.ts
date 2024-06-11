import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview-card',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatChipsModule, CommonModule],
  templateUrl: './overview-card.component.html',
  styleUrl: './overview-card.component.scss'
})
export class OverviewCardComponent {
  @Input() cardData: any;
  @Input() cardType: any;
}
