import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './components/pages/layout-page/layout-page.component';
import { ListPageComponent } from './components/pages/list-page/list-page.component';


const routes: Routes = [
{
  path:'',
  component:  LayoutPageComponent,
  children:[
    {path:'list', component:ListPageComponent},
    {path:'**', redirectTo:'list'}
  ]
}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChiksgoldRoutingModule { }
