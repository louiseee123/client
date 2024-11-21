import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostService } from '../post.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-post-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDialogModule, MatInputModule, ReactiveFormsModule,MatButton],
  templateUrl: './post-dialog.component.html',
  styleUrl: './post-dialog.component.css'
})
export class PostDialogComponent {
postForm : FormGroup;

constructor(
  private fb: FormBuilder,
  private ps: PostService,
){
  this.postForm = this.fb.group({
    title: [''],
    content: [''],
  });
}
onSubmit(){
  
  this.ps.create(this.postForm.value).subscribe((data) => {
    location.reload();
  });
}

}
