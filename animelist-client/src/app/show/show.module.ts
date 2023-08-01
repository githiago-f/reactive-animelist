import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowService } from './service/show.service';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { VideoLengthPipe } from './pipe/video-length.pipe';

@NgModule({
  declarations: [
    ShowListComponent,
    ShowDetailComponent,
    VideoLengthPipe
  ],
  providers: [
    ShowService
  ],
  imports: [CommonModule],
  exports: [ShowListComponent, ShowDetailComponent]
})
export class ShowModule { }
