import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ConcertDetailComponent, ConcertEditComponent, ConcertOverviewComponent } from '@concert-project/concert';
import { UserDetailComponent, UserEditComponent, UserOverviewComponent } from '@concert-project/user';
import { LoginComponent, RegisterComponent } from '@concert-project/auth';

const routes: Routes = [
    { path: 'users', pathMatch: 'full', component: UserOverviewComponent },
    { path: 'users/new', pathMatch: 'full', component: UserEditComponent },
    { path: 'users/:id', pathMatch: 'full', component: UserDetailComponent },
    { path: 'users/:id/edit', pathMatch: 'full', component: UserEditComponent },

    { path: 'concerts', pathMatch: 'full', component: ConcertOverviewComponent },
    { path: 'concerts/new', pathMatch: 'full', component: ConcertEditComponent },
    { path: 'concerts/:id', pathMatch: 'full', component: ConcertDetailComponent },
    { path: 'concerts/:id/edit', pathMatch: 'full', component: ConcertEditComponent },

    { path: 'about', pathMatch: 'full', component: AboutComponent },

    { path: 'register', pathMatch: 'full', component: RegisterComponent },
    { path: 'login', pathMatch: 'full', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }