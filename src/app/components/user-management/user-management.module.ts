import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementRootComponent } from './user-management-root/user-management-root.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UserDetailsDialogComponent } from './_dialogs/user-details-dialog/user-details-dialog.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    UserManagementRootComponent,
    SearchUserComponent,
    SingleUserComponent,
    UserDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule
  ]
})
export class UserManagementModule { }
