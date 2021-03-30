import { Component, OnInit } from '@angular/core';
import { posts } from 'src/app/interfaces/postinterface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:posts[]=[]
  constructor( private PostService:PostService) { }
  getposts(){
    this.PostService.getPosts().subscribe((res)=>{
      this.posts=res
    },(error)=>{
      console.log(error)
    })
  }
  addPost(posts:posts){
    this.PostService.addPosts(posts).subscribe(()=>{
      this.posts.splice(0,0,posts)
    
    })
  }

  deletePosts(posts:posts){
    this.PostService.deleteposts(posts.id).subscribe(()=>{
      let index=this.posts.indexOf(posts)
      this.posts.splice(index,1)
    })
  }


  ngOnInit(): void {
    this.getposts()
  }

}
