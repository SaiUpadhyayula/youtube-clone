import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionBarComponent } from './suggestion-bar.component';

describe('SuggestionBarComponent', () => {
  let component: SuggestionBarComponent;
  let fixture: ComponentFixture<SuggestionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
