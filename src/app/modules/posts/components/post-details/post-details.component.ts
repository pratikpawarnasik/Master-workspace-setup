import { Actions } from '@ngrx/effects';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IPost } from 'src/app/core/store/interface/posts.interface';
import { fetchDataById } from 'src/app/core/store/actions/posts.actions';
import { selectSinglePost, selectLoading, selectError } from 'src/app/core/store/selectors/posts.selectors';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent implements OnInit {
  post$!: Observable<IPost[] | null>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store: Store,
    private route: ActivatedRoute,
    private router: Router) {
    this.post$ = this.store.select(selectSinglePost);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.store.dispatch(fetchDataById({ id }));
   
  }

  ngOnInit() {

    this.post$.subscribe(posts => {
      console.log('Post details:', posts);
      // You can perform further operations with the array of post details
    });

      this.post$.subscribe(postDetailsData => {
        if (postDetailsData && postDetailsData.length > 0) {
          const tags = postDetailsData[0].tags; // Access the 'tags' property of the first item in the array
          console.log('tags:', tags);
        }
      });
    // Dispatch the fetchDataById action to fetch data by ID
    
  }
}