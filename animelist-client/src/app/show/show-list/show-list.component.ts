import { Component, OnInit } from '@angular/core';
import { ShowService } from '../service/show.service';
import { Observable } from 'rxjs';
import { Show } from '../entity/show';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {
  showlistObservable?: Observable<Show[]>;
  hoverItem: number;

  constructor(private showService: ShowService) {
    this.hoverItem = -1;
  }

  ngOnInit(): void {
    this.showlistObservable = this.showService.getAllShows();
  }
}
