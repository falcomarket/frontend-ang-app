import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualFormComponent } from './dual-form.component';

describe('DualFormComponent', () => {
  let component: DualFormComponent;
  let fixture: ComponentFixture<DualFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DualFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DualFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
