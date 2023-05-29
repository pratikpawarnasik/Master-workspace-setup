
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { IPosts, IPost } from '../store/interface/posts.interface';
import { APIConfigs } from './APIs.config';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://dummyjson.com/posts'; // Replace with your API URL
  urlConfig = new APIConfigs;

  constructor(private http: HttpClient
    ) {
      }

    fetchPostsData(): Observable<IPosts> {
        return this.http.get<IPosts>( this.urlConfig._getPostsUrl());
    }
    
    // Fetch data by ID service call
    fetchPostById(id: number): Observable<IPost[]> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<IPost[]>(this.urlConfig._getPostByIDUrl(id));
    }

    // // Fetch comment by ID service call
    // fetchCommentById(id: number): Observable<any> {
    //   const url = `${this.apiUrl}/posts/${id}/comments`;
    //   return this.http.get<any>(url);
    // }
}
