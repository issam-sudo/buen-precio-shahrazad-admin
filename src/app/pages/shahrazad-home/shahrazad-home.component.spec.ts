import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadHomeComponent } from './shahrazad-home.component';

describe('ShahrazadHomeComponent', () => {
  let component: ShahrazadHomeComponent;
  let fixture: ComponentFixture<ShahrazadHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
