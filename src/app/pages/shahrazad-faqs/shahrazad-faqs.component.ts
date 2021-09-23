import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shahrazad-faqs',
  templateUrl: './shahrazad-faqs.component.html',
  styleUrls: ['./shahrazad-faqs.component.scss']
})
export class ShahrazadFaqsComponent implements OnInit {
  panelOpenState:Boolean = false;
  submitted:Boolean = false;
  files: File[] = [];  
  images: any;
  formData: FormData = new FormData(); 
  listFaqs$: any;
  pageSize: Number = 3;
  page: Number = 1;
  updateFaq = { title: "", description: "" };
  vahiculeId: String;
  host: String;
  SaveComplete:Boolean = false
  UpdateComplete:Boolean = false
  DeleteComplete:Boolean = false
  IdFaq: any;

  constructor(private fb: FormBuilder) {
 

   
  }

  ngOnInit(): void {
  }


 
  registrationForm = this.fb.group({
    blog: this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      topic: ['', [Validators.required]],
    })
  })

  get myForm() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (!this.registrationForm.valid) {

      return false;

    } else {
      this.SaveComplete = true
  
      console.log(this.registrationForm.value)
       
    }
  }
}
