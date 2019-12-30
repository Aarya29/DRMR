import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoIOSReportComponent } from './no-iosreport.component';

describe('NoIOSReportComponent', () => {
  let component: NoIOSReportComponent;
  let fixture: ComponentFixture<NoIOSReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoIOSReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoIOSReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
