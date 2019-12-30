import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { PRAReportComponent } from './components/prareport/prareport.component';
import { PRWReportComponent } from './components/prwreport/prwreport.component';

@Component({
  selector: 'app-drmr',
  templateUrl: './drmr.component.html',
  styleUrls: ['./drmr.component.scss']
})
export class DrmrComponent implements OnInit {
  SelectedValue: string;
  SelectedValuePrw: string;
  allBankers = true;

  @ViewChild(PRAReportComponent, {static: true}) praReport: PRAReportComponent;

  @ViewChild(PRWReportComponent, {static: true}) prwReport: PRWReportComponent;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(data: TabDirective): void {
    this.SelectedValue = data.heading;
    console.log('SelectedValue ', this.SelectedValue);
    this.praReport.callData();
  }
  onSelectPrw(data: TabDirective): void {
    this.SelectedValuePrw = data.heading;
    console.log('SelectedValuePrw ', this.prwReport);
    this.prwReport.callData();
  }

}
