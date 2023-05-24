import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';



@NgModule({
  declarations: [
    CommentListComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommentsModule { }
