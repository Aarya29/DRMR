import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PROReportComponent } from './proreport.component';

describe('PROReportComponent', () => {
  let component: PROReportComponent;
  let fixture: ComponentFixture<PROReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PROReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PROReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
