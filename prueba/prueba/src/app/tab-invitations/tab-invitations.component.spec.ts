import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInvitationsComponent } from './tab-invitations.component';

describe('TabInvitationsComponent', () => {
  let component: TabInvitationsComponent;
  let fixture: ComponentFixture<TabInvitationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabInvitationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
