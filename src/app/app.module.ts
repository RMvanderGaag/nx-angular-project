import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { UserOverviewComponent } from './pages/user-page/user-overview/user-overview.component';
import { UserEditComponent } from './pages/user-page/user-edit/user-edit.component';
import { UserDetailComponent } from './pages/user-page/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserOverviewComponent,
    UserEditComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
