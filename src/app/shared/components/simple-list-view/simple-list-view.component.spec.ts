import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleListViewComponent } from './simple-list-view.component';

describe('SimpleListViewComponent', () => {
  let component: SimpleListViewComponent;
  let fixture: ComponentFixture<SimpleListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleListViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
