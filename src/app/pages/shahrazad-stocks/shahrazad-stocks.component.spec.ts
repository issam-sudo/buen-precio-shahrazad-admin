import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadStocksComponent } from './shahrazad-stocks.component';

describe('ShahrazadStocksComponent', () => {
  let component: ShahrazadStocksComponent;
  let fixture: ComponentFixture<ShahrazadStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
