import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-account-accordion',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatCardModule],
  templateUrl: './account-accordion.component.html',
  styleUrl: './account-accordion.component.scss'
})
export class AccountAccordionComponent {
  @Input() accordionData: any;
  panelOpenState = false;

  trackByKey(index: number, item: any): string {
    return item.key;
  }

  trackByTitle(index: number, item: any): string {
    return item.title;
  }
}
