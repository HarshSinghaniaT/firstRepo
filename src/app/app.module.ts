import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { DeptComponent } from './dept/dept.component';
import { TechnologyComponent } from './technology/technology.component';
import { ProductsComponent } from './products/products.component';
import { AmountCalcumationComponent } from './amount-calcumation/amount-calcumation.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators }  from '@angular/forms';
import { DeptListComponent } from './dept-list/dept-list.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { UserComponent } from './user/user.component';
import { UserpipePipe } from './user/userpipe.pipe';
import { RangePipe } from './user/range.pipe';
import { SearchFilterPipe } from './user/search-filter.pipe';
import { SearchConditionPipe } from './user/search-condition.pipe';
import { EmpListComponent } from './emp-list/emp-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorShadowDirective } from './color-shadow.directive';
import { AdminUsersDirective } from './admin-users.directive';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    DeptComponent,
    TechnologyComponent,
    ProductsComponent,
    AmountCalcumationComponent,
    DeptListComponent,
    DeptDetailsComponent,
    UserComponent,
    UserpipePipe,
    RangePipe,
    SearchFilterPipe,
    SearchConditionPipe,
    EmpListComponent,
    ColorShadowDirective,
    AdminUsersDirective,
    SignInComponent,
    SignOutComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
