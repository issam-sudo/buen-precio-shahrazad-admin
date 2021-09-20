import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shahrazad-blogs',
  templateUrl: './shahrazad-blogs.component.html',
  styleUrls: ['./shahrazad-blogs.component.scss']
})
export class ShahrazadBlogsComponent implements OnInit {
  panelOpenState:Boolean = false;
  submitted:Boolean = false;
  files: File[] = [];  
  images: any;
  formData: FormData = new FormData(); 
  listBlogs$: any;
  pageSize: Number = 3;
  page: Number = 1;
  updateBlog = { title: "", description: "" };
  vahiculeId: String;
  host: String;
  SaveComplete:Boolean = false
  UpdateComplete:Boolean = false
  DeleteComplete:Boolean = false
  IdBlog: any;

  constructor(private fb: FormBuilder) {
 

   
  }

  ngOnInit(): void {
  }



  onSelect(event) {
    this.files.push(...event.addedFiles);
    this.images = event.addedFiles
    for (let img of this.images) {
      this.formData.set('files', img);
    }
    console.log(this.images)
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }


  registrationForm = this.fb.group({
    blog: this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file: [this.formData]
    })
  })

  get myForm() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (!this.registrationForm.valid || !this.files) {

      return false;

    } else {
      this.SaveComplete = true
      this.formData.set('title', this.registrationForm.value.blog.title);
      this.formData.set('description', this.registrationForm.value.blog.description);
      console.log(this.formData.get('title'))
       
    }
  }
}
