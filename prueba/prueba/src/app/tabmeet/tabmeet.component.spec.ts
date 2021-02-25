import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabmeetComponent } from './tabmeet.component';

describe('TabmeetComponent', () => {
  let component: TabmeetComponent;
  let fixture: ComponentFixture<TabmeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabmeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabmeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
