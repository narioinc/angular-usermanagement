import { Component, OnInit, ViewChild } from '@angular/core';
import { License } from '../models/license.model';
import { LicenseService } from '../license.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.css']
})
export class LicensesComponent implements OnInit {

  constructor(private licenseService: LicenseService) { }
  displayedColumns: string[] = ['no', 'id', 'userId'];
  dataSource :MatTableDataSource<License> = new MatTableDataSource<License>();

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.licenseService.getLicenses().subscribe((data: License[]) => {
      this.dataSource = new MatTableDataSource<License>(data);
    });
  }

}
