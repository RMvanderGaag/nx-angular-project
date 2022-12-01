import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcertOverviewComponent } from './concert-overview/concert-overview.component';
import { ConcertDetailComponent } from './concert-detail/concert-detail.component';
import { ConcertEditComponent } from './concert-edit/concert-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [ConcertOverviewComponent, ConcertDetailComponent, ConcertEditComponent],
})
export class ConcertModule { }
