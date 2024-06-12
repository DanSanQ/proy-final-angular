import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeldaComponent } from './zelda.component';

describe('ZeldaComponent', () => {
  let component: ZeldaComponent;
  let fixture: ComponentFixture<ZeldaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZeldaComponent]
    });
    fixture = TestBed.createComponent(ZeldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
