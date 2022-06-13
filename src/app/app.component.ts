import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CellClickedEvent } from 'ag-grid-community';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rowData$! : Observable<any[]>;

  colDefs: ColDef[] = [
    {field:'id'},
    {field:'status'},
    {field:'date/time'},
    {field:'client'}
  ];

  defaultColDef: ColDef = {
    sortable: true, filter: true
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData$ = this.http.get<any[]>('https://angular-test-02.s3.ap-southeast-2.amazonaws.com/data.json');
    //this.rowData$ = this.http.get<any[]>('assets/data.json');
  }

  onCellClicked(event: CellClickedEvent){
    console.log(event);
  }
}
