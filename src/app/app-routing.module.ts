import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UsergroupsComponent } from './usergroups/usergroups.component';
import { LicensesComponent } from './licenses/licenses.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'usergroup', component: UsergroupsComponent },
  { path: 'license', component: LicensesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
