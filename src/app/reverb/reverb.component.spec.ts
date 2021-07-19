import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverbComponent } from './reverb.component';

describe('ReverbComponent', () => {
  let component: ReverbComponent;
  let fixture: ComponentFixture<ReverbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
