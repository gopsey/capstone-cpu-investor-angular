import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-simple-list-view',
  standalone: true,
  imports: [CommonModule, MatListModule, MatDividerModule, MatIconModule],
  templateUrl: './simple-list-view.component.html',
  styleUrl: './simple-list-view.component.scss'
})
export class SimpleListViewComponent {
  @Input() listViewData: any;
}
