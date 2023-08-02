import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showSlug'
})
export class ShowSlugPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return `/show/${value}/1`;
  }
}
