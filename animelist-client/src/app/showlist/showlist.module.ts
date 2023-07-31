import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { ShowService } from './service/show.service';

@NgModule({
  declarations: [PageComponent],
  providers: [ShowService],
  imports: [CommonModule],
  exports: [PageComponent]
})
export class ShowlistModule { }
