import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmountCalcumationComponent } from './amount-calcumation/amount-calcumation.component';
import { AuthGarudService } from './auth-garud.service';
import { DeptListComponent } from './dept-list/dept-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { TechnologyComponent } from './technology/technology.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', redirectTo:"technology", pathMatch: "full"}, 
  { path:"empDetails", component: EmployeeComponent, canActivate :[AuthGarudService]},
  { path:"technology", component: TechnologyComponent, },
  { path:"products", component: ProductsComponent, canActivate:[AuthGarudService]},
  { path:"amountCalc", component: AmountCalcumationComponent, canActivate:[AuthGarudService]},
  { path:"deptList", component: DeptListComponent, canActivate:[AuthGarudService]},
  { path:"user", component: UserComponent, canActivate:[AuthGarudService]},
  { path:"empList", component: EmpListComponent, canActivate:[AuthGarudService]},
  { path:"login", component: LoginComponent, canActivate:[AuthGarudService]},
  { path:"signin", component: SignInComponent},
  { path:"signout", component: SignOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
