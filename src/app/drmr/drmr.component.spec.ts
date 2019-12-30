import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrmrComponent } from './drmr.component';

describe('DrmrComponent', () => {
  let component: DrmrComponent;
  let fixture: ComponentFixture<DrmrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrmrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
