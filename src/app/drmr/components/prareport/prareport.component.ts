import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-prareport',
  templateUrl: './prareport.component.html',
  styleUrls: ['./prareport.component.scss']
})
export class PRAReportComponent implements OnInit {
  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;

  title = 'app';

  columnDefs = [
       {headerName: 'NUMBER', field: 'id', resizable: true, sortable: true, filter: true },
      {headerName: 'NAME', field: 'name', resizable: true, sortable: true, filter: true},
      {headerName: 'EMAIL', field: 'email', resizable: true, sortable: true, filter: true},
      {headerName: 'ADDRESS', field: 'address.street', resizable: true, sortable: true, filter: true},
      {headerName: 'SUITE', field: 'address.suite', resizable: true, sortable: true, filter: true},
      {headerName: 'CITY', field: 'address.city', resizable: true, sortable: true, filter: true},
      {headerName: 'ZIPCODE', field: 'address.zipcode', resizable: true, sortable: true, filter: true}
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
  message: string;
  constructor(private http: HttpClient) {

  }

  callData() {
    this.rowData = this.http.get('https://jsonplaceholder.typicode.com/users');
    console.log(this.rowData);
  }

  ngOnInit() {
      this.callData();
  }

}
