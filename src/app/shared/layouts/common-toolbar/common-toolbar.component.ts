import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-common-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './common-toolbar.component.html',
  styleUrl: './common-toolbar.component.scss'
})
export class CommonToolbarComponent {

  constructor(private router: Router) {}

  goToPage(pageRoute: string) {
    this.router.navigate([`/${pageRoute}`]);
  }

}
