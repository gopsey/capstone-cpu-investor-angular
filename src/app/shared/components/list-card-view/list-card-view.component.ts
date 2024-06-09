import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-card-view',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './list-card-view.component.html',
  styleUrl: './list-card-view.component.scss'
})
export class ListCardViewComponent {
  @Input() listCardViewData: any;
  @Output() selectedListCardViewItem: any = new EventEmitter<any>();

  selectedListCardView = (selectedListCardView: number) => {
    this.selectedListCardViewItem.emit(selectedListCardView);
  }
}
