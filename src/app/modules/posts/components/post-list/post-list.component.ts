// post-list.component.ts
import { Actions } from '@ngrx/effects';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import colors from '../../../../core/data/colors.json';
import { fetchData } from 'src/app/core/store/actions/posts.actions';
import { IPost } from 'src/app/core/store/interface/posts.interface';
import { selectPosts, selectLoading, selectError } from 'src/app/core/store/selectors/posts.selectors';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts$!: Observable<IPost[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  colorObject: any = colors;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private cdr: ChangeDetectorRef
  ) { 
    console.log("---constructor---");
  }


  ngOnInit() {
    console.log("---Inside ngOnInit---");
     // Dispatch the fetchData action to fetch all data
     this.store.dispatch(fetchData());
    this.posts$ = this.store.select(selectPosts);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

   

    this.posts$.subscribe(postsTempData => {
      console.log('posts:::', postsTempData);
    });
    this.cdr.detectChanges();
this.loading$.subscribe(loading => {
  console.log('Post lisr --> loading:', loading);
});

    this.posts$ = this.posts$.pipe(
      map(posts => {
        return posts.map(post => {
          const colorIndex = Math.floor(Math.random() * this.colorObject.length);
          const mergedPost = Object.assign({}, post, this.colorObject[colorIndex]);
          return mergedPost;
        });
      })
    );

  }


  viewMore(val: any) {
    this.router.navigate(['/posts/details/' + val]);
  }

  ngDoCheck() {
    console.log("---Inside ngDoCheck---");
  }
  ngAfterContentInit() {
    console.log("---Inside ngAfterContentInit---");
  }
  ngAfterContentChecked() {
    console.log("---Inside ngAfterContentChecked---");
  }
  ngAfterViewInit() {
    console.log("---Inside ngAfterViewInit---");
  }  
  ngAfterViewChecked() {
    console.log("---Inside ngAfterViewChecked---");    
  }
  ngOnDestroy() {
    console.log("---Inside ngOnDestroy---");      
  }

}   
