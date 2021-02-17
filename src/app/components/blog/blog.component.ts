import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.interface';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listaPosts: Post[];
  listaCategorias: string[];



  constructor(private postService: PostService) {
    this.listaPosts = [];
  }

  async ngOnInit() {

    try {
      this.listaPosts = await this.postService.getAllPosts();
    } catch (error) {
      console.log(error);
    }

    this.listaCategorias = this.postService.getArrCategorias();

  }

  async onChange($event) {
    try {
      if ($event.target.value === 'todos') {
        this.listaPosts = await this.postService.getAllPosts();
      } else {
        this.listaPosts = await this.postService.getPostByCategorias($event.target.value);
      }
    } catch (error) {
      console.log(error);
    }
  }

}
