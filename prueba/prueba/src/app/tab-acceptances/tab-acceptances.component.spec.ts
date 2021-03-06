import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAcceptancesComponent } from './tab-acceptances.component';

describe('TabAcceptancesComponent', () => {
  let component: TabAcceptancesComponent;
  let fixture: ComponentFixture<TabAcceptancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAcceptancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAcceptancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
