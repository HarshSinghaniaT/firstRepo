import { Component, OnInit } from '@angular/core';
import { Users } from '../models/Users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  start:number = 0;
  end:number = 4;
  isButtonVisible:boolean = false;
  min:number = 0;
  max:number = 0;
  filterCondition:string = "";
  selectedValue:string="";
  list:any[] = [];
  key:string = "";
  value:string = "";


  userDetails:Users[] = [
    {name:"Ajay", contact: 9237294231, location:"Chn", salary: 70000, dob:new Date(1997,2,31), job:"Accountant"},
    {name:"Vijay", contact: 9127632981, location:"Chn", salary: 87000, dob:new Date(1987,3,30), job:"Sales"},
    {name:"Sanjay", contact: 8348723452, location:"Chn", salary: 87000, dob:new Date(1996,5,11), job:"Sales"},
    {name:"Ajith", contact: 9236824512, location:"Blr", salary: 88000, dob:new Date(1997,3,14), job:"IT"},
    {name:"Sujith", contact: 9876543211, location:"Blr", salary: 89000, dob:new Date(1987,2,21), job:"Accountant"},
    {name:"Akash", contact: 9786543212, location:"Blr", salary: 97000, dob:new Date(1989,6,20), job:"Sales"},
    {name:"Vikas", contact: 9234623433, location:"Hyd", salary: 59000, dob:new Date(1980,3,19), job:"IT"},
    {name:"Vimal", contact: 8236232341, location:"Hyd", salary: 45000, dob:new Date(1990,6,4), job:"Accountant"},
    {name:"Kamal", contact: 7343272123, location:"Hyd", salary: 50000, dob:new Date(2001,8,3), job:"Sales"},
    {name:"Adarsh", contact: 6128312432, location:"Bom", salary: 91000, dob:new Date(2002,9,8), job:"IT"},
    {name:"Sudharshan", contact: 8713251832, location:"Bom", salary: 90888, dob:new Date(1998,10,10), job:"IT"},
    {name:"Surya", contact: 9712372332, location:"Bom", salary: 1200000, dob:new Date(1999,11,20), job:"Sales"},
    {name:"Anandh", contact: 7345324871, location:"Pune", salary: 46000, dob:new Date(2000,11,11), job:"Sales"},
    {name:"Avinash", contact: 9347612345, location:"Pune", salary: 98000, dob:new Date(1987,9,16), job:"IT"},
    {name:"Mukesh", contact: 9236435235, location:"Pune", salary: 89000, dob:new Date(1988,2,29), job:"Accountant"},
    {name:"Suresh", contact: 9034503463, location:"Amd", salary: 66000, dob:new Date(1994,6,12), job:"IT"},
    {name:"Ramesh", contact: 8062348043, location:"Amd", salary: 67000, dob:new Date(1992,3,14), job:"Accountant"},
    {name:"Kamlesh", contact: 7014512301, location:"Amd", salary: 70000, dob:new Date(2002,4,29), job:"IT"},
    {name:"Gokul", contact: 7766554422, location:"UP", salary: 80000, dob:new Date(1997,3,12), job:"IT"},
    {name:"Vipul", contact: 9900135324, location:"UP", salary: 90000, dob:new Date(1992,2,1), job:"Accountant"},

  ];

  public empDetails:any[] = [
    {name: "Ajay", grades:1, deptno:201},
    {name: "Vijay", grades:2, deptno:202},
    {name: "Kamal", grades:4, deptno:201},
    {name: "Suresh", grades:2, deptno:203},
    {name: "Ramesh", grades:3, deptno:205},
    {name: "Kumar", grades:2, deptno:207},
    {name: "Ajith", grades:3, deptno:204},
    {name: "Avinash", grades:4, deptno:207},
    {name: "Vinith", grades:1, deptno:205},
    {name: "Vikas", grades:2, deptno:204},
    {name: "Surya", grades:3, deptno:202},
    {name: "Bharat", grades:4, deptno:202},
    {name: "Prakash", grades:1, deptno:203}
  ];

  loadMore_click(){
    this.end += 4;
    if(this.end >= this.userDetails.length){
      this.isButtonVisible = true;
    }
  }

  filterButton_click(){
    this.key = this.filterCondition;
    this.value = this.selectedValue;
  }
}