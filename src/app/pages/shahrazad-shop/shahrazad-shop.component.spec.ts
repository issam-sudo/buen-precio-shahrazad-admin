import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadShopComponent } from './shahrazad-shop.component';

describe('ShahrazadShopComponent', () => {
  let component: ShahrazadShopComponent;
  let fixture: ComponentFixture<ShahrazadShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
