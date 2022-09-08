import { Component, OnInit, ViewChild } from '@angular/core';
import {User} from '../models/user.model'
import { UserService } from '../user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }
  displayedColumns: string[] = ['no', 'id', 'firstName', 'lastName', 'email'];
  //dataSource = USER_DATA;
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.dataSource = new MatTableDataSource<User>(data);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
