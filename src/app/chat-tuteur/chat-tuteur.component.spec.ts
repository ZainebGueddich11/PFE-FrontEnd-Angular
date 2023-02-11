import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTuteurComponent } from './chat-tuteur.component';

describe('ChatTuteurComponent', () => {
  let component: ChatTuteurComponent;
  let fixture: ComponentFixture<ChatTuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatTuteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
