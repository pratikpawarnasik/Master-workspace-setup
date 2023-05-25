// post.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsRoutingModule } from './posts-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { _postsEffects } from 'src/app/core/store/effects/posts.effects';
import { _postsReducer } from 'src/app/core/store/reducers/posts.reducer';
import { PostsService } from 'src/app/core/store/services/posts.service';



@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('postsDataStore', _postsReducer),
      EffectsModule.forFeature([_postsEffects]),
    PostsRoutingModule 
  ],
  providers: [PostsService],

})
export class PostsModule { }
