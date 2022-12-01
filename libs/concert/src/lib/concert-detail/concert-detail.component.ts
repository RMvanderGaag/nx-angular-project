import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Concert, ConcertService } from '@concert-project/concert';

@Component({
  selector: 'app-concert-detail',
  templateUrl: './concert-detail.component.html',
  styleUrls: ['./concert-detail.component.css']
})
export class ConcertDetailComponent implements OnInit {
  concert: Concert | null = null;

  constructor(private concertService: ConcertService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((c) => {
      this.concert = this.concertService.getConcertById(Number(c.get('id')));
    })
  }

}
