
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { Posts, Post } from '../interface/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://dummyjson.com/posts'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  

    fetchData(): Observable<Posts> {
        return this.http.get<Posts>(this.apiUrl).pipe(delay(2000));
    }
    
    // Fetch data by ID service call
    fetchDataById(id: number): Observable<Post[]> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Post[]>(url);
    }

    // Fetch comment by ID service call
    fetchCommentById(id: number): Observable<any> {
      const url = `${this.apiUrl}/posts/${id}/comments`;
      return this.http.get<any>(url);
    }
}
