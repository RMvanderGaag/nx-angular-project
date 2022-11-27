import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { UserOverviewComponent } from './pages/user-page/user-overview/user-overview.component';
import { UserEditComponent } from './pages/user-page/user-edit/user-edit.component';
import { UserDetailComponent } from './pages/user-page/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about-page/about/about.component';
import { ConcertOverviewComponent } from './pages/concert-page/concert-overview/concert-overview.component';
import { ConcertDetailComponent } from './pages/concert-page/concert-detail/concert-detail.component';
import { ConcertEditComponent } from './pages/concert-page/concert-edit/concert-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserOverviewComponent,
    UserEditComponent,
    UserDetailComponent,
    AboutComponent,
    ConcertOverviewComponent,
    ConcertDetailComponent,
    ConcertEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
