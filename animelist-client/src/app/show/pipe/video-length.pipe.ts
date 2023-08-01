import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoLength'
})
export class VideoLengthPipe implements PipeTransform {
  private pad(val: number) {
    return String(val).padStart(2, '0');
  }

  transform(value: number, ...args: unknown[]): unknown {
    const hou = Math.floor(value / 3600);
    const min = Math.floor((value % 3600) / 60);
    const sec = Math.floor((value % 3600) % 60);
    return `${this.pad(hou)}:${this.pad(min)}:${this.pad(sec)}`;
  }

}
