import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChiksgoldRoutingModule } from './chiksgold-routing.module';
import { LayoutPageComponent } from './components/pages/layout-page/layout-page.component';
import { ListPageComponent } from './components/pages/list-page/list-page.component';
import { CardsLayoutComponent } from './components/pages/cards-layout/cards-layout.component';
import { CardsComponent } from './components/pages/shared/cards/cards.component';
import { FooterComponent } from './components/pages/shared/footer/footer.component';
import { HeaderComponent } from './components/pages/shared/header/header.component';



@NgModule({
  declarations: [
    ListPageComponent,
    LayoutPageComponent,
    CardsLayoutComponent,
    CardsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChiksgoldRoutingModule
  ]
})
export class ChiksgoldModule { }
