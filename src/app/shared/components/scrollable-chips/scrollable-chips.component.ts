import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-scrollable-chips',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './scrollable-chips.component.html',
  styleUrl: './scrollable-chips.component.scss'
})
export class ScrollableChipsComponent {
  @Input() scrollableChipData: any = [];
  @Output() selectedChip = new EventEmitter<string>();

  chipId = (item: any) => item.key;

  setChipActive = (chipData: any) => {
    this.scrollableChipData.map((chip: any) => chip.isActive = false);
    chipData.isActive = true;
    this.selectedChip.emit(chipData.key);
  }

}
