import { Component, OnInit } from '@angular/core';
import { AccountAccordionComponent } from '../../shared/components/account-accordion/account-accordion.component';
import { TopNavbarComponent } from '../../shared/layouts/top-navbar/top-navbar.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [AccountAccordionComponent, TopNavbarComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {
  accountSectionData: any[] = [];
  navbarType: string = 'accountTopNav';

  ngOnInit(): void {
    this.accountSectionData = [
      {
        key: 'profile',
        description: 'Profile',
        data: [
          [
            { title: 'Name', value: 'Mr.Royce' },
            { title: 'User ID', value: 'UJJHBHE546444' },
          ],
          [
            { title: 'Mobile', value: '+31 9878454244' },
            { title: 'Home', value: '+31 9878454244' },
            { title: 'Address', value: '34 Psdfsd, oosdfsdf, sdffs, 900 008' },
          ],
          [
            { title: 'Email', value: 'roycecollins@gmail.com' },
          ],
        ]
      },
      {
        key: 'help',
        description: 'Help & FAQs',
        data: [
          [
            { title: 'Name', value: 'Mr.Royce' },
            { title: 'User ID', value: 'UJJHBHE546444' },
          ],
          [
            { title: 'Mobile', value: '+31 9878454244' },
            { title: 'Home', value: '+31 9878454244' },
            { title: 'Address', value: '34 Psdfsd, oosdfsdf, sdffs, 900 008' },
          ],
          [
            { title: 'Email', value: 'roycecollins@gmail.com' },
          ],
        ]
      },
      {
        key: 'feedback',
        description: 'Feedback',
        data: [
          [
            { title: 'Name', value: 'Mr.Royce' },
            { title: 'User ID', value: 'UJJHBHE546444' },
          ],
          [
            { title: 'Mobile', value: '+31 9878454244' },
            { title: 'Home', value: '+31 9878454244' },
            { title: 'Address', value: '34 Psdfsd, oosdfsdf, sdffs, 900 008' },
          ],
          [
            { title: 'Email', value: 'roycecollins@gmail.com' },
          ],
        ]
      },
      {
        key: 'dataConsent',
        description: 'Data Consent',
        data: [
          [
            { title: 'Name', value: 'Mr.Royce' },
            { title: 'User ID', value: 'UJJHBHE546444' },
          ],
          [
            { title: 'Mobile', value: '+31 9878454244' },
            { title: 'Home', value: '+31 9878454244' },
            { title: 'Address', value: '34 Psdfsd, oosdfsdf, sdffs, 900 008' },
          ],
          [
            { title: 'Email', value: 'roycecollins@gmail.com' },
          ],
        ]
      },
      {
        key: 'legalDisclosures',
        description: 'Legal Disclosures',
        data: [
          [
            { title: 'Name', value: 'Mr.Royce' },
            { title: 'User ID', value: 'UJJHBHE546444' },
          ],
          [
            { title: 'Mobile', value: '+31 9878454244' },
            { title: 'Home', value: '+31 9878454244' },
            { title: 'Address', value: '34 Psdfsd, oosdfsdf, sdffs, 900 008' },
          ],
          [
            { title: 'Email', value: 'roycecollins@gmail.com' },
          ],
        ]
      },
      {
        key: 'logout',
        description: 'Logout',
        data: [
          [
            { title: 'Name', value: 'Mr.Royce' },
            { title: 'User ID', value: 'UJJHBHE546444' },
          ],
          [
            { title: 'Mobile', value: '+31 9878454244' },
            { title: 'Home', value: '+31 9878454244' },
            { title: 'Address', value: '34 Psdfsd, oosdfsdf, sdffs, 900 008' },
          ],
          [
            { title: 'Email', value: 'roycecollins@gmail.com' },
          ],
        ]
      },
    ]
  console.log(this.accountSectionData)
  }

}
