import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDashBoardComponent } from './table-dash-board.component';

describe('TableDashBoardComponent', () => {
  let component: TableDashBoardComponent;
  let fixture: ComponentFixture<TableDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
