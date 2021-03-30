import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from 'src/app/interfaces/postinterface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
posts:posts={}
id:string =this.route.snapshot.params.id
  constructor(private PostService:PostService , private route:ActivatedRoute) { }

  updatePosts(post:posts){
    this.PostService.updatePosts(this.id,post).subscribe((res)=>console.log(res))
  }
  
  getSingleData(){
    this.PostService.getSinglePost(this.id).subscribe((res)=>this.posts=res)
  }



  ngOnInit(): void {
    this.getSingleData()
  }

}
