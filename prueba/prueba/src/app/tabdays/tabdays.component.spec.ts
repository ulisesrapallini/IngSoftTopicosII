import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabDaysComponent } from './tabdays.component';

describe('TabDaysComponent', () => {
  let component: TabDaysComponent;
  let fixture: ComponentFixture<TabDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
