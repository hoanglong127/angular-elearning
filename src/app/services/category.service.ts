import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICategory } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoryList = new BehaviorSubject<ICategory[]>([]);

  constructor() {}

  setCategoryList(list: ICategory[]): void {
    this.categoryList.next(list);
  }
}
