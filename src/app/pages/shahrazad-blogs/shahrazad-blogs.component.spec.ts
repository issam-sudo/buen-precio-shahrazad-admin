import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadBlogsComponent } from './shahrazad-blogs.component';

describe('ShahrazadBlogsComponent', () => {
  let component: ShahrazadBlogsComponent;
  let fixture: ComponentFixture<ShahrazadBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
