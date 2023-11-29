import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChiksgoldRoutingModule } from './chiksgold-routing.module';
import { LayoutPageComponent } from './components/pages/layout-page/layout-page.component';
import { ListPageComponent } from './components/pages/list-page/list-page.component';



@NgModule({
  declarations: [
    ListPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChiksgoldRoutingModule
  ]
})
export class ChiksgoldModule { }
