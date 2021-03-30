import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {posts} from'../interfaces/postinterface';
@Injectable({
  providedIn: 'root'
})
export class PostService {
url='https://jsonplaceholder.typicode.com/posts/'

  constructor(private http:HttpClient ) { }
  getPosts(){

    return this.http.get <posts []>(this.url) 
  }
  getSinglePost(id:string){
    return this.http.get<posts>(this.url+id)
  }
  addPosts(post:posts){
    return this.http.post(this.url,post)
  }
  deleteposts(id:any){
    return this.http.delete(this.url +id)
  }
  updatePosts(id:string,post:posts){
    return this.http.patch(this.url+id,post)
  }
}
