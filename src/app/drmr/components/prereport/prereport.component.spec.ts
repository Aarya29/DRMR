import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PREReportComponent } from './prereport.component';

describe('PREReportComponent', () => {
  let component: PREReportComponent;
  let fixture: ComponentFixture<PREReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PREReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PREReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
