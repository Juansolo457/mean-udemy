import { Component} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent  {
  public newPost = '';
  newPost2 = 'No Content'; 


  onAddPost(){
    alert('post added');
    this.newPost = 'The user\'s post'
  }



}
