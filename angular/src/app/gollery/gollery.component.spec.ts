import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolleryComponent } from './gollery.component';

describe('GolleryComponent', () => {
  let component: GolleryComponent;
  let fixture: ComponentFixture<GolleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolleryComponent]
    });
    fixture = TestBed.createComponent(GolleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
