import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model'
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }
  displayedColumns: string[] = ['no', 'id', 'firstName', 'lastName', 'email'];
  //dataSource = USER_DATA;
  dataSource: User[] = []; 

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.dataSource = data
    });
  }

}
