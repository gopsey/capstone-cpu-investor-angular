import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ScrollableChipsComponent } from '../../../../../shared/src/lib/components/scrollable-chips/scrollable-chips.component';
import { SimpleListViewComponent } from '../../../../../shared/src/lib/components/simple-list-view/simple-list-view.component';
import { TopNavbarComponent } from '../../../../../shared/src/lib/layouts/top-navbar/top-navbar.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [ScrollableChipsComponent, SimpleListViewComponent, MatIconModule, TopNavbarComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent implements OnInit {
  scrollableChipData: any = [];
  portfolioData: any = [];
  activitiesData: any = [];
  portfolioCardData: any = {};
  cardType: string = 'overview';
  navbarType: string = 'activity';

  constructor(private location: Location) {

  }

  ngOnInit(): void {
    // GET portfolioData Response
    this.portfolioData = [
      {
        key: 'allPortfolios',
        description: 'All Portfolios',
        noOfPortfolios: 2,
        noOfHoldings: 5,
        portfolioValue: '$100,000.00',
        stockValue: '+3072.23',
        stockPercentage: '+18.67',
      },
      {
        key: 'royceCollins',
        description: 'Royce Collins',
        noOfPortfolios: null,
        noOfHoldings: null,
        portfolioValue: '$7,050.00',
        stockValue: '+372.23',
        stockPercentage: '+8.87',
      },
      {
        key: 'royceCollinsAndEmilyClarke',
        description: 'Royce Collins and Emily Clarke',
        noOfPortfolios: null,
        noOfHoldings: null,
        portfolioValue: '$93,078.00',
        stockValue: '+32.23',
        stockPercentage: '+5.67',
      },
    ];
    this.activitiesData = [
      {
        id: 1,
        activityType: 'Purchase',
        activityTitle: 'Apple Inc (AAPL)',
        activityDate: '18 Jan 2024',
        activitySubtext: '50 Shares',
        activityValue: '$10,000.00',
        activityIcon: 'shopping_cart_checkout',
        activityStatus: 'medium',
      },
      {
        id: 2,
        activityType: null,
        activityTitle: 'Withdrawal',
        activityDate: '18 Jan 2024',
        activitySubtext: null,
        activityValue: '$2,000.00',
        activityIcon: 'payments',
        activityStatus: 'high',
      },
      {
        id: 3,
        activityType: 'Purchase',
        activityTitle: 'Apple Inc (AAPL)',
        activityDate: '18 Jan 2024',
        activitySubtext: '50 Shares',
        activityValue: '$10,000.00',
        activityIcon: 'shopping_cart_checkout',
        activityStatus: 'medium',
      },
      {
        id: 4,
        activityType: 'Purchase',
        activityTitle: 'Google (GOOGL)',
        activityDate: '18 Jan 2024',
        activitySubtext: '50 Shares',
        activityValue: '$5,000.00',
        activityIcon: 'shopping_cart_checkout',
        activityStatus: 'low',
      },
      {
        id: 5,
        activityType: 'Sale',
        activityTitle: 'Apple Inc (AAPL)',
        activityDate: '18 Jan 2024',
        activitySubtext: '50 Shares',
        activityValue: '$10,000.00',
        activityIcon: 'shopping_cart_checkout',
        activityStatus: 'high',
      },
      {
        id: 6,
        activityType: 'Purchase',
        activityTitle: 'Apple Inc (AAPL)',
        activityDate: '18 Jan 2024',
        activitySubtext: '50 Shares',
        activityValue: '$10,000.00',
        activityIcon: 'shopping_cart_checkout',
        activityStatus: 'medium',
      },
      {
        id: 7,
        activityType: null,
        activityTitle: 'Deposit',
        activityDate: null,
        activitySubtext: null,
        activityValue: '$3,000.00',
        activityIcon: 'price_change',
        activityStatus: 'high',
      },
    ]

    // Setting scollable chip data based on response from API
    this.scrollableChipData = this.portfolioData.map((portfolio: any) => {
      return { key: portfolio.key, description: portfolio.description, isActive: false }
    })
    this.scrollableChipData[0].isActive = true;
    this.portfolioCardData = this.portfolioData[0];
    const locationState: any = this.location.getState();
    this.selectedPortfolio(locationState.selectedPortfolio ? locationState.selectedPortfolio : 'allPortfolios');
  }

  selectedPortfolio(portfolioKey: string) {
    console.log(portfolioKey)
    this.portfolioCardData = this.portfolioData.find((portfolio: any) => portfolio.key === portfolioKey);
    this.cardType = portfolioKey === 'allPortfolios' ? 'overview' : 'summary';
    this.scrollableChipData.map((chipItem: any) => chipItem.isActive = chipItem.key === portfolioKey);
  }

}
