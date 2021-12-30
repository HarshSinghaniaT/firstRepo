import { Component, OnInit } from '@angular/core';
import { Dept } from '../models/Dept';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent {
  public mode:string = "List";
  deptArray: Dept[] = [
    {dname:"Accounts", deptno:201, location:"Mumbai"},
    {dname:"Accounts", deptno:202, location:"Chn"},
    {dname:"Accounts", deptno:203, location:"Mumbai"},
    {dname:"Management", deptno:204, location:"Chn"},
    {dname:"Management", deptno:205, location:"Mumbai"},
    {dname:"Management", deptno:206, location:"Chn"},
    {dname:"Developer", deptno:207, location:"Mumbai"},
    {dname:"Developer", deptno:208, location:"Mumbai"},
    {dname:"Developer", deptno:209, location:"Chn"},
    {dname:"Testing", deptno:210, location:"Chn"},
    {dname:"Testing", deptno:211, location:"Chn"},
    {dname:"Testing", deptno:212, location:"Chn"},
  ];

  button_click(type:string){
    this.mode=type;
  }
}
