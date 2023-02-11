import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatApprenantComponent } from './chat-apprenant.component';

describe('ChatApprenantComponent', () => {
  let component: ChatApprenantComponent;
  let fixture: ComponentFixture<ChatApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
