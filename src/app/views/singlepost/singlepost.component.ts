import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { posts } from 'src/app/interfaces/postinterface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
posts:posts={}
  constructor(private PostService:PostService, private route:ActivatedRoute, private router:Router) { }
  id:string=this.route.snapshot.params.id
getSinglePost(){
  this.PostService.getSinglePost(this.id).subscribe((res)=>this.posts=res)

}
back(){
this.router.navigate(['/posts'])
}
  ngOnInit(): void {
    this.getSinglePost()
  }

}
