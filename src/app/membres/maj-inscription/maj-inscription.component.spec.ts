import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajInscriptionComponent } from './maj-inscription.component';

describe('MajInscriptionComponent', () => {
  let component: MajInscriptionComponent;
  let fixture: ComponentFixture<MajInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MajInscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MajInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
