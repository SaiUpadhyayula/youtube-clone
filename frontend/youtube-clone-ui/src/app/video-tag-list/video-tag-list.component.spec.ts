import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTagListComponent } from './video-tag-list.component';

describe('VideoTagListComponent', () => {
  let component: VideoTagListComponent;
  let fixture: ComponentFixture<VideoTagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoTagListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
