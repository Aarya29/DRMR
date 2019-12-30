import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRAReportComponent } from './components/prareport/prareport.component';
import { PRWReportComponent } from './components/prwreport/prwreport.component';
import { PROReportComponent } from './components/proreport/proreport.component';
import { NoIOSReportComponent } from './components/no-iosreport/no-iosreport.component';
import { PREReportComponent } from './components/prereport/prereport.component';
import { CombinedEgComponent } from './components/combined-eg/combined-eg.component';
import { KnowledgeBreakComponent } from './components/knowledge-break/knowledge-break.component';
import { ConcentrationBreakComponent } from './components/concentration-break/concentration-break.component';
import { DrmrComponent } from './drmr.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

@NgModule({
  declarations: [
    PRAReportComponent,
    PRWReportComponent,
    PROReportComponent,
    NoIOSReportComponent,
    PREReportComponent,
    CombinedEgComponent,
    KnowledgeBreakComponent,
    ConcentrationBreakComponent,
    DrmrComponent],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  exports: [
    DrmrComponent
  ]
})
export class DrmrModule { }
