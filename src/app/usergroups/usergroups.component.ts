import { Component, OnInit } from '@angular/core';
import {Usergroup} from '../models/usergroup.model'
import { UsergroupService } from '../usergroup.service';

@Component({
  selector: 'app-usergroups',
  templateUrl: './usergroups.component.html',
  styleUrls: ['./usergroups.component.css']
})
export class UsergroupsComponent implements OnInit {

  constructor(private usergroupService: UsergroupService) { }
  displayedColumns: string[] = ['no', 'id', 'groupName', 'groupDescription'];
  //dataSource = USERGROUP_DATA;
  dataSource : Usergroup[] = []

  ngOnInit(): void {
    this.usergroupService.getUsergroups().subscribe((data: Usergroup[]) => {
      this.dataSource = data
    });
  }

}
