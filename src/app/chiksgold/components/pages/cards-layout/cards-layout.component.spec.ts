import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLayoutComponent } from './cards-layout.component';

describe('CardsLayoutComponent', () => {
  let component: CardsLayoutComponent;
  let fixture: ComponentFixture<CardsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
