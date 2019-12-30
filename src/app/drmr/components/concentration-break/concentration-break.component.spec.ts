import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationBreakComponent } from './concentration-break.component';

describe('ConcentrationBreakComponent', () => {
  let component: ConcentrationBreakComponent;
  let fixture: ComponentFixture<ConcentrationBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcentrationBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentrationBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
