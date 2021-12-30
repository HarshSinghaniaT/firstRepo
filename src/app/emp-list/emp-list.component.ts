import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DeptListId } from '../models/DeptListId';
import { EmpListService } from '../emp-list/emp-list.service'

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit{
  ngOnInit(){
    // this.getData_click();
  
  }

  isPIDDisabled:boolean = false;
  id : number = 0;
  dname:string = "";
  deptno : number = 0;
  location : string = "";
  data:DeptListId[] = [];
  specificArray: any[] =[];
  
  // http : any;
  url = "http://localhost:3000/empList";
  constructor(private https: HttpClient, private jsonService: EmpListService){
  }
  getData_click(){

    let observerObj : Observable<any> =  this.https.get(this.url);
    observerObj.subscribe((res : any) => {
      this.data = res;
      console.log(this.data);
    });
  }

  selectEmp_click(id:number){
    let index : number = this.data.findIndex(x => x.id == id);
    let selectedDept : DeptListId = this.data[index];
    this.id = selectedDept.id;
    this.dname = selectedDept.dname;
    this.deptno = selectedDept.deptno;
    this.location = selectedDept.location;

    this.isPIDDisabled = true;
  }
  deleteEmp_click(id:number){
    this.deleteData_click(id);
  }
  addData_click(){
    if(((this.data.findIndex(x => x.id == this.id)) == -1) && (this.id != 0))
    this.jsonService.addDept({id:this.id, dname:this.dname, deptno:this.deptno, location:this.location}).subscribe((response: any) => {
      console.log("New data added");
      this.clearFields();
      this.getData_click();
    })
  }
  updateData_click(){
    let index : number = this.data.findIndex(x => x.id == this.id);
    this.data[index].dname = this.dname;
    this.data[index].deptno = this.deptno;
    this.data[index].location = this.location;

    this.jsonService.updateDept(this.data[index]).subscribe(() => {
      console.log("Updated");
      this.clearFields();
      this.getData_click();

    });
  }

  deleteData_click(id:number){
    let index : number = this.data.findIndex(x => x.id == id);
    let isDelete:boolean = confirm("Do you want to delete");
    if(isDelete){
      this.jsonService.deleteDept(this.data[index].id).subscribe(() => {
        
        this.getData_click();
      });
  }
  }

  getEmpJobs(){
    return this.jsonService.getDeptJobs().subscribe((response:string[]) => {
      this.specificArray = response;
    });
  }
  getEmpByJobs(){
    return this.jsonService.getDeptByJobs("Testing").subscribe((response:string[]) => {
      this.specificArray = response;
    });
  }
  getEnameandJobs(){
    return this.jsonService.getIDandDepName().subscribe((response:any[]) =>{
      this.specificArray = response;
    });

  }
  clearFields(){
    this.isPIDDisabled = false;
    this.deptno = 0;
    this.dname = "";
    this.id = 0;
    this.location = "";
  }
}