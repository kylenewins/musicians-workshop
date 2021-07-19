import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockShopComponent } from './rock-shop.component';

describe('RockShopComponent', () => {
  let component: RockShopComponent;
  let fixture: ComponentFixture<RockShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
