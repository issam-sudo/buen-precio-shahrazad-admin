import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadTagsComponent } from './shahrazad-tags.component';

describe('ShahrazadTagsComponent', () => {
  let component: ShahrazadTagsComponent;
  let fixture: ComponentFixture<ShahrazadTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
