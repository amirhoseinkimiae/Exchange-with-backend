import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { PostInterface } from '../models/post.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{

  Posts?:Observable<PostInterface[]>;

  constructor(private service: PostsService){}

  ngOnInit() :void{
    this.Posts=this.service.getPosts();
    // this.Posts.subscribe(data=>{
    //   data[0].id;
    // })
  }
}
