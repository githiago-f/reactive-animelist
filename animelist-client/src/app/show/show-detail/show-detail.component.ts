import { Component, OnInit } from '@angular/core';
import { ShowService } from '../service/show.service';
import { Observable, switchMap, tap } from 'rxjs';
import { Show, ShowDetail } from '../entity/show';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  show?: ShowDetail;

  constructor(
    private showService: ShowService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({slug}) => this.showService.getShow(slug))
    ).subscribe(show => this.show = show);
  }
}
