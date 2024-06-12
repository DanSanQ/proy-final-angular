import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetfComponent } from './streetf.component';

describe('StreetfComponent', () => {
  let component: StreetfComponent;
  let fixture: ComponentFixture<StreetfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StreetfComponent]
    });
    fixture = TestBed.createComponent(StreetfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
