import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../shared/category/category.service';
import { CloudinaryService } from '../../../shared/cloudinary/cloudinary.service';
import { Category } from '../../../shared/models/category/category.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-category',
  imports: [FormsModule],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent implements OnInit {



  id: any


  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private cloudinaryService: CloudinaryService,
    private activatedRoute: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")

    this.getSingleCategory()

  }




  getSingleCategory() {
    this.categoryService.getSingleCategory(this.id).subscribe((res: any) => {
      this.categoryObj = res
    },
      (err: any) => {
        console.log(err);
      }
    )

  }

  categoryObj: Category = {}


  selectedFile: any


  uploadFile(event: any) {
    this.selectedFile = event.target.files[0]
  }

  submit() {
    this.spinner.show()
    if (this.selectedFile) {
      this.cloudinaryService.uploadImage(this.selectedFile).subscribe((res: any) => {
        this.categoryObj.imageUrl = res.secure_url
        this.categoryService.updateCategory(this.id, this.categoryObj).then((res: any) => {
          this.spinner.hide()
          this.toastr.success("Category Updated")
          this.router.navigateByUrl("/admin/category/manage")
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
    } else {
      this.spinner.show()
      this.categoryService.updateCategory(this.id, this.categoryObj).then((res: any) => {
        this.spinner.hide()
        this.toastr.success("Category Updated")
        this.router.navigateByUrl("/admin/category/manage")
      }, (err: any) => {
        console.log(err);
      })
    }









  }

}
