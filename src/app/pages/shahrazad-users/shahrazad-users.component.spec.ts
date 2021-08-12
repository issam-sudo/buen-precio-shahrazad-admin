import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadUsersComponent } from './shahrazad-users.component';

describe('ShahrazadUsersComponent', () => {
  let component: ShahrazadUsersComponent;
  let fixture: ComponentFixture<ShahrazadUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
