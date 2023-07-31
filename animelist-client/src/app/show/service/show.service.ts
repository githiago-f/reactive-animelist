import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ENV } from 'src/env';
import { Show, ShowDetail } from '../../show/entity/show';

@Injectable({ providedIn: 'root' })
export class ShowService {
  private readonly BASE_URL = new URL('/shows', ENV.API_URL);

  getAllShows(page = 0): Observable<Show[]> {
    this.BASE_URL.searchParams.append('page', String(page));
    return from(fetch(this.BASE_URL).then(r => r.json()));
  }

  getShow(slug: string): Observable<ShowDetail> {
    const url = this.BASE_URL.toString() + '/' + slug;
    return from(fetch(url).then(r => r.json()));
  }
}
