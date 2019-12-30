import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRAReportComponent } from './prareport.component';

describe('PRAReportComponent', () => {
  let component: PRAReportComponent;
  let fixture: ComponentFixture<PRAReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRAReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRAReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
