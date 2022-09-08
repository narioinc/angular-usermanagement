import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model'
import { UserService } from '../user.service';

const USER_DATA: User[] = [
  {id: "1", firstName: "fname1", lastName: "lname1", email: "fname1@lname1.com"},
  {id: "2", firstName: "fname2", lastName: "lname2", email: "fname2@lname2.com"},
  {id: "3", firstName: "fname3", lastName: "lname3", email: "fname3@lname3.com"},
  {id: "4", firstName: "fname4", lastName: "lname4", email: "fname4@lname4.com"},
];


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
    this.userService.getHeroes().subscribe((data: User[]) => {
      this.dataSource = data
    });
  }

}
