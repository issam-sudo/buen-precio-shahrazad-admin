import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadCategoryComponent } from './shahrazad-category.component';

describe('ShahrazadCategoryComponent', () => {
  let component: ShahrazadCategoryComponent;
  let fixture: ComponentFixture<ShahrazadCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
