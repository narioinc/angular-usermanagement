import { Component, OnInit, ViewChild } from '@angular/core';
import {Usergroup} from '../models/usergroup.model'
import { UsergroupService } from '../usergroup.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-usergroups',
  templateUrl: './usergroups.component.html',
  styleUrls: ['./usergroups.component.css']
})
export class UsergroupsComponent implements OnInit {

  constructor(private usergroupService: UsergroupService) { }
  displayedColumns: string[] = ['no', 'id', 'groupName', 'groupDescription'];
  //dataSource = USERGROUP_DATA;
  dataSource : MatTableDataSource<Usergroup> = new MatTableDataSource<Usergroup>();
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.usergroupService.getUsergroups().subscribe((data: Usergroup[]) => {
      this.dataSource = new MatTableDataSource<Usergroup>(data);
    });
  }

}
