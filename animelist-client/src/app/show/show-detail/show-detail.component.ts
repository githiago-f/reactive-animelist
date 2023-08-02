import { Component, OnInit } from '@angular/core';
import { ShowService } from '../service/show.service';
import { switchMap, catchError, throwError, map } from 'rxjs';
import { ShowDetail } from '../entity/show';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  show?: ShowDetail;
  error?: string;

  constructor(
    private showService: ShowService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({slug, season}) => this.showService.getShow(slug, season)),
      map(show => {
        show.episodes.sort((a, b) => a.id - b.id);
        return show;
      }),
      catchError((err: Error) => {
        if(/Failed to fetch/gi.test(err.message)) {
          this.error = 'Cannot access the service, please try again later!';
        }
        if(/Unexpected end of/gi.test(err.message)) {
          this.error = 'Error when loading this show.'
        }
        return throwError(() => err);
      }),
    ).subscribe(show => this.show = show);
  }
}
