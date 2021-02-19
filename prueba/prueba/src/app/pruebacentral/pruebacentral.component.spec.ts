import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebacentralComponent } from './pruebacentral.component';

describe('PruebacentralComponent', () => {
  let component: PruebacentralComponent;
  let fixture: ComponentFixture<PruebacentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebacentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebacentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
