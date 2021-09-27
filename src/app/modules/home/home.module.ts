import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './home-index/home-index.component';
import { CategoryComponent } from './category/category.component';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeIndexComponent, CategoryComponent],
  imports: [CommonModule, MatListModule, FlexLayoutModule],
})
export class HomeModule {}
