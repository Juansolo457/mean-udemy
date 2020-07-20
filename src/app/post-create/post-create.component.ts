import { Component} from '@angular/core';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent  {
  public newPost = '';
  newPost2 = 'No Content'; 
  enteredValue = "";

  // onAddPost(postInput: HTMLTextAreaElement){
  //   console.log(postInput);
  //   alert('post added');
  //   //this.newPost = 'The user\'s post'
  //   this.newPost2 = postInput.value
  // }

  onAddPost(){
    this.newPost2 = this.enteredValue;
  }



}
