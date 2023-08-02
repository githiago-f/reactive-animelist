import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoLength'
})
export class VideoLengthPipe implements PipeTransform {
  private pad(val: number) {
    return String(val).padStart(2, '0');
  }

  transform(value: number, ...args: unknown[]): string {
    const min = Math.floor((value % 3600) / 60);
    const sec = Math.floor((value % 3600) % 60);
    let result = `${this.pad(min)}:${this.pad(sec)}`;
    if(value >= 3600) {
      const hou = Math.floor(value / 3600);
      result = this.pad(hou) + ':' + result;
    }
    return result;
  }

}
