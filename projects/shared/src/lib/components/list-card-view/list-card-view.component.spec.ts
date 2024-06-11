import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardViewComponent } from './list-card-view.component';

describe('ListCardViewComponent', () => {
  let component: ListCardViewComponent;
  let fixture: ComponentFixture<ListCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCardViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
