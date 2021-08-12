import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadBrandsComponent } from './shahrazad-brands.component';

describe('ShahrazadBrandsComponent', () => {
  let component: ShahrazadBrandsComponent;
  let fixture: ComponentFixture<ShahrazadBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
