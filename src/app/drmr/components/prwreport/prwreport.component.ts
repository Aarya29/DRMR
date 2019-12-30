import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-prwreport',
  templateUrl: './prwreport.component.html',
  styleUrls: ['./prwreport.component.scss']
})
export class PRWReportComponent implements OnInit {

  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;

  title = 'app';

  columnDefs = [
      {headerName: 'ID', field: 'id', resizable: true, sortable: true, filter: true},
      {headerName: 'Employee Name', field: 'employee_name', resizable: true, sortable: true, filter: true},
      {headerName: 'Employee Salary', field: 'employee_salary', resizable: true, sortable: true, filter: true},
      {headerName: 'Employee Age', field: 'employee_age', resizable: true, sortable: true, filter: true}
  ];

  // autoGroupColumnDef = {
  //     headerName: 'Model',
  //     field: 'model',
  //     cellRenderer: 'agGroupCellRenderer',
  //     cellRendererParams: {
  //         checkbox: false
  //     }
  // };

  rowData: any;

  constructor(private http: HttpClient) {

  }

  callData() {
    this.rowData = this.http.get('http://dummy.restapiexample.com/api/v1/employees');
    console.log(this.rowData);
  }

  ngOnInit() {
    //this.callData();
  }

}
