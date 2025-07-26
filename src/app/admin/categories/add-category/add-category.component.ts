import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../shared/category/category.service';
import { Category } from '../../../shared/models/category/category.model';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { CloudinaryService } from '../../../shared/cloudinary/cloudinary.service';

@Component({
  selector: 'app-add-category',
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {


  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private cloudinaryService: CloudinaryService
  ) {
  }


  categoryObj: Category = {}


  selectedFile: any


  uploadFile(event: any) {
    this.selectedFile = event.target.files[0]
  }

  submit() {
    this.spinner.show()
    this.cloudinaryService.uploadImage(this.selectedFile).subscribe((res: any) => {
      this.categoryObj.imageUrl = res.secure_url
      this.categoryService.addCategory(this.categoryObj).then((res: any) => {
        if (res) {
          this.spinner.hide()
          this.toastr.success("Category Added")
          this.router.navigateByUrl("/admin/category/manage")
        }
        else {
          this.spinner.hide()
          this.toastr.error("Category not added")
        }
      }, ((err: any) => {
        this.spinner.hide()
        this.toastr.error("Something went wrong")
        console.log(err);
      })
      )

    },
      (err: any) => {
        this.spinner.hide()
        this.toastr.error("Something went wrong")
        console.log(err);

      }

    )




  }


}
