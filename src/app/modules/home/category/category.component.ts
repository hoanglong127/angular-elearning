import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { CategoryApiService } from 'src/app/services/category-api.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryList!: ICategory[];

  constructor(
    private _categoryApiService: CategoryApiService,
    private _categoryService: CategoryService
  ) {}

  fetchCategory(): void {
    this._categoryApiService.fetchCategory().subscribe(
      (res) => {
        this._categoryService.setCategoryList(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.fetchCategory();

    this._categoryService.categoryList.subscribe((list) => {
      this.categoryList = list;
    });
  }
}
