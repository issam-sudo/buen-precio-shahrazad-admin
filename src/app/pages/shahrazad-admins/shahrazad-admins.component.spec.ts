import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadAdminsComponent } from './shahrazad-admins.component';

describe('ShahrazadAdminsComponent', () => {
  let component: ShahrazadAdminsComponent;
  let fixture: ComponentFixture<ShahrazadAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
