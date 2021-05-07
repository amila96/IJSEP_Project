import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureRoomPageComponent } from './configure-room-page.component';

describe('ConfigureRoomPageComponent', () => {
  let component: ConfigureRoomPageComponent;
  let fixture: ComponentFixture<ConfigureRoomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureRoomPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureRoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
