import { Component, OnInit } from '@angular/core';
import { Concert, ConcertService } from '@concert-project/concert';

@Component({
  selector: 'app-concert-overview',
  templateUrl: './concert-overview.component.html',
  styleUrls: ['./concert-overview.component.css']
})
export class ConcertOverviewComponent implements OnInit {
  concerts: Concert[] = [];

  constructor(private concertService: ConcertService) { }

  ngOnInit(): void {
    this.concerts = this.concertService.getConcerts();
    console.log(this.concerts);
  }

  deleteConcert(id: number): void {
    this.concertService.deleteConcert(id);
  }

}
