import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../entity/show';
import { ShowService } from '../service/show.service';

@Component({
  selector: 'app-showlist-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  showlistObservable?: Observable<Show[]>;
  hoverItem: number;

  constructor(private showService: ShowService) {
    this.hoverItem = -1;
  }

  ngOnInit() {
    this.showlistObservable = this.showService.getAllShows();
  }
}
