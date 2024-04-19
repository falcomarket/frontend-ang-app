import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTempleteComponent } from './user-templete.component';

describe('UserTempleteComponent', () => {
  let component: UserTempleteComponent;
  let fixture: ComponentFixture<UserTempleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserTempleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
