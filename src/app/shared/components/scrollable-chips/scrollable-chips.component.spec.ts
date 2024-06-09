import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableChipsComponent } from './scrollable-chips.component';

describe('ScrollableChipsComponent', () => {
  let component: ScrollableChipsComponent;
  let fixture: ComponentFixture<ScrollableChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollableChipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollableChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
