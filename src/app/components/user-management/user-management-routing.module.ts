import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementRootComponent } from './user-management-root/user-management-root.component';

const routes: Routes = [
  {path: '', component: UserManagementRootComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
