import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../shared/category/category.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-categories',
  imports: [RouterLink, DatePipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {


  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService


  ) {

  }
  ngOnInit(): void {
    this.getAllCategories()
  }



  categories: any[] = []


  getAllCategories() {
    this.spinner.show()
    this.categoryService.allCategories().subscribe((res: any) => {
      this.categories = res
      this.spinner.hide()
      this.toastr.success("Categories Loaded")
    },
      ((err: any) => {
        this.spinner.hide()
        console.log(err);
      })
    )
  }



  deleteCategory(id: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.deleteCategory(id).then((res: any) => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        },
          (err: any) => {
            console.log(err);
          }
        )
      }
    });
  }
}
