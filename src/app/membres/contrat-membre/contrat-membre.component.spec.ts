import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratMembreComponent } from './contrat-membre.component';

describe('ContratMembreComponent', () => {
  let component: ContratMembreComponent;
  let fixture: ComponentFixture<ContratMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContratMembreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContratMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
