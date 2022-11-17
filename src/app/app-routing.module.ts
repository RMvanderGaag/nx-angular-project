import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './pages/user-page/user-detail/user-detail.component';
import { UserOverviewComponent } from './pages/user-page/user-overview/user-overview.component';

const routes: Routes = [
  { path: 'users', pathMatch: 'full', component: UserOverviewComponent },
  { path: 'users/:id', pathMatch: 'full', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
