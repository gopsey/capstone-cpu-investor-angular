import { Component, OnInit } from '@angular/core';
import { OverviewCardComponent } from '../../../../../shared/src/lib/components/overview-card/overview-card.component';
import { ScrollableChipsComponent } from '../../../../../shared/src/lib/components/scrollable-chips/scrollable-chips.component';
import { DonutChartComponent } from '../../../../../shared/src/lib/components/donut-chart/donut-chart.component';
import { ListCardViewComponent } from '../../../../../shared/src/lib/components/list-card-view/list-card-view.component';
import { SimpleListViewComponent } from '../../../../../shared/src/lib/components/simple-list-view/simple-list-view.component';
import { TopNavbarComponent } from '../../../../../shared/src/lib/layouts/top-navbar/top-navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ScrollableChipsComponent,
    OverviewCardComponent,
    DonutChartComponent,
    ListCardViewComponent,
    SimpleListViewComponent,
    TopNavbarComponent,
    MatButtonModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  scrollableChipData: any = [];
  investmentGroupsData: any = [];
  investmentGroupsChips: any = [];
  portfolioData: any = [];
  listCardViewData: any = [];
  portfolioCardData: any = {};
  cardType: string = 'overview';
  navbarType: string = 'allPortfolios';

  constructor(private router: Router) {}

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
        noOfHoldings: 5,
        portfolioValue: '$7,050.00',
        stockValue: '+372.23',
        stockPercentage: '+8.87',
      },
      {
        key: 'royceCollinsAndEmilyClarke',
        description: 'Royce Collins and Emily Clarke',
        noOfPortfolios: null,
        noOfHoldings: 2,
        portfolioValue: '$93,078.00',
        stockValue: '+32.23',
        stockPercentage: '+5.67',
      },
    ];
    this.investmentGroupsChips = [
      { key: 'all', description: 'All', isActive: true },
      { key: 'certificateShares', description: 'Certificate Shares', isActive: false },
      { key: 'registeredShares', description: 'Registered Shares', isActive: false },
      { key: 'employeePlanShares', description: 'Employee Plan Shares', isActive: false },
    ]
    this.investmentGroupsData = [
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
    ]
    // Setting scollable chip data based on response from API
    this.scrollableChipData = this.portfolioData.map((portfolio: any) => {
      return { key: portfolio.key, description: portfolio.description, isActive: false }
    })
    this.scrollableChipData[0].isActive = true;
    this.portfolioCardData = this.portfolioData[0];
    this.listCardViewData = [...this.portfolioData];
    this.listCardViewData.shift();
  }

  selectedPortfolio(portfolioKey: string) {
    console.log(portfolioKey)
    this.portfolioCardData = this.portfolioData.find((portfolio: any) => portfolio.key === portfolioKey);
    this.cardType = portfolioKey === 'allPortfolios' ? 'overview' : 'summary';
    this.scrollableChipData.map((chipItem: any) => chipItem.isActive = chipItem.key === portfolioKey);
    this.setNavbarType(portfolioKey);
  }

  selectedListCardView(selectedListCard: any) {
    this.selectedPortfolio(selectedListCard.key)
  }

  selectedInvestmentGroup(selectedInvestment: any) {
    console.log(selectedInvestment)
  }

  setNavbarType(headerType: string) {
    this.navbarType = headerType;
  }

  viewPortfolioActivity() {
    this.router.navigate(['/activity'], { state: { selectedPortfolio: this.navbarType } })
  }

}
