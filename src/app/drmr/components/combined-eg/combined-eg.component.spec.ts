import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedEgComponent } from './combined-eg.component';

describe('CombinedEgComponent', () => {
  let component: CombinedEgComponent;
  let fixture: ComponentFixture<CombinedEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinedEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
