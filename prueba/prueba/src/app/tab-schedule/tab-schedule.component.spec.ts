import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabScheduleComponent } from './tab-schedule.component';

describe('TabScheduleComponent', () => {
  let component: TabScheduleComponent;
  let fixture: ComponentFixture<TabScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
