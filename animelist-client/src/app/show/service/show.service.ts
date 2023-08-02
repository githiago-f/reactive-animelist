import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ENV } from 'src/env';
import { Show, ShowDetail } from '../../show/entity/show';

@Injectable({ providedIn: 'root' })
export class ShowService {
  private readonly BASE_URL = () => new URL('/shows', ENV.API_URL);

  getAllShows(page = 0): Observable<Show[]> {
    const url = this.BASE_URL()
    url.searchParams.append('page', String(page));
    return from(fetch(url).then(r => r.json()));
  }

  getShow(slug: string, season: string): Observable<ShowDetail> {
    const url = this.BASE_URL();
    url.pathname += '/' + slug;
    url.searchParams.append('season', season);
    return from(fetch(url).then(r => r.json()));
  }
}
