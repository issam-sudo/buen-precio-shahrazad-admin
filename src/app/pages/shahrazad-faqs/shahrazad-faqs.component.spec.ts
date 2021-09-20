import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahrazadFaqsComponent } from './shahrazad-faqs.component';

describe('ShahrazadFaqsComponent', () => {
  let component: ShahrazadFaqsComponent;
  let fixture: ComponentFixture<ShahrazadFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahrazadFaqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahrazadFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
