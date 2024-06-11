import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonToolbarComponent } from '../../../shared/src/lib/layouts/common-toolbar/common-toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonToolbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CapstoneCpuInvestorAngular';
}
