import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUtilisateurModComponent } from './liste-utilisateur-mod.component';

describe('ListeUtilisateurModComponent', () => {
  let component: ListeUtilisateurModComponent;
  let fixture: ComponentFixture<ListeUtilisateurModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeUtilisateurModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeUtilisateurModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
