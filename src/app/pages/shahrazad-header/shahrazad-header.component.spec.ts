import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadHeaderComponent } from './shahrazad-header.component';

describe('ShahrazadHeaderComponent', () => {
  let component: ShahrazadHeaderComponent;
  let fixture: ComponentFixture<ShahrazadHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
