import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DeptListId } from '../models/DeptListId';

@Injectable({
  providedIn: 'root'
})
export class EmpListService {

  dataArray:DeptListId[] = [];
  url:string = "http://localhost:3000/empList";
  constructor(private http : HttpClient) { }

  getDept():Observable<DeptListId[]> {
    return this.http.get<DeptListId[]>(this.url);
  }
  updateDept(deptObj:any):Observable<any> {
    let updateUrl:string = this.url + "/" + deptObj.id;
    return this.http.put(updateUrl, deptObj);
  }
  deleteDept(id:number):Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }
  addDept(deptObj:any):Observable<any> {
    return this.http.post(this.url, deptObj);
  }

  getDeptJobs():Observable<string[]> {
    return this.http.get<any[]>(this.url).pipe(
      map(res =>{
        return res.map(item => {
          return item.dname
        });
      })
    );
  }

  getIDandDepName():Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      map(res => {
        return res.map(item => {
          return {id: item.id, dname:item.dname}
        });
      })
    );
  }

  getDeptByJobs(job:string):Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      map(res => {
        return res.filter(item => item.dname == job);
      })
    )
  }
}
