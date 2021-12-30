import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  // constructor() { }

  // ngOnInit(): void {
  // }
  public empId: Object = 2201;
  public empName: string= "Scott";
  public empJob: string= "Accountant";
  public empSalary: number= 70000;
  public empDept: number = 2;

}
