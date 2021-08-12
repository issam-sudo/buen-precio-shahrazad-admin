import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadSubCategoryComponent } from './shahrazad-sub-category.component';

describe('ShahrazadSubCategoryComponent', () => {
  let component: ShahrazadSubCategoryComponent;
  let fixture: ComponentFixture<ShahrazadSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadSubCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
