import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAccordionComponent } from './account-accordion.component';

describe('AccountAccordionComponent', () => {
  let component: AccountAccordionComponent;
  let fixture: ComponentFixture<AccountAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
