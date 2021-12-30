import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdminUsers]'
})
export class AdminUsersDirective implements OnInit{
  @Input() appAdminUsers:string = "";
  constructor(private viewContainer:ViewContainerRef, private templateRef:TemplateRef<any>) { }

  ngOnInit(){
    let adminUsersList:string[] = ["Scott", "Smith", "Robert", "Mark"];
    console.log(this.appAdminUsers)
    if((this.appAdminUsers != "") && (adminUsersList.includes(this.appAdminUsers))){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
