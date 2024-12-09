import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallHistoryPageComponent } from './call-history-page.component';

describe('CallHistoryPageComponent', () => {
  let component: CallHistoryPageComponent;
  let fixture: ComponentFixture<CallHistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallHistoryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
