import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dept } from '../models/Dept';


@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent {

  @Input()
  deptObj : Dept[] = []; 

  @Input()
  mode:string = "List";

}
