import { Component, OnInit } from '@angular/core';
import { License } from '../models/license.model';
import { LicenseService } from '../license.service';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.css']
})
export class LicensesComponent implements OnInit {

  constructor(private licenseService: LicenseService) { }
  displayedColumns: string[] = ['no', 'id', 'userId'];
  dataSource : License[] = []

  ngOnInit(): void {
    this.licenseService.getLicenses().subscribe((data: License[]) => {
      this.dataSource = data
    });
  }

}
