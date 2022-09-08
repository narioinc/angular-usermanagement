import { Component, OnInit } from '@angular/core';
import {Usergroup} from '../models/usergroup.model'

const USERGROUP_DATA: Usergroup[] = [
  {id: "1", groupName: "group1", groupDescription: "group1 description"},
  {id: "2", groupName: "group2", groupDescription: "group2 description"},
  {id: "3", groupName: "group3", groupDescription: "group3 description"},
  {id: "4", groupName: "group4", groupDescription: "group4 description"},
];

@Component({
  selector: 'app-usergroups',
  templateUrl: './usergroups.component.html',
  styleUrls: ['./usergroups.component.css']
})
export class UsergroupsComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['no', 'id', 'groupName', 'groupDescription'];
  dataSource = USERGROUP_DATA;

  ngOnInit(): void {
  }

}
