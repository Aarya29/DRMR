import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRWReportComponent } from './prwreport.component';

describe('PRWReportComponent', () => {
  let component: PRWReportComponent;
  let fixture: ComponentFixture<PRWReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRWReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRWReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
