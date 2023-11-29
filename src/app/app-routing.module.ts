import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [

  {
    path: 'list',
    loadChildren: () => import('./chiksgold/chiksgold.module').then(m => m.ChiksgoldModule)
  },
 /*  {
    path:'404',
    component:Error404pageComponent
  }, */
  {
    path: '',
    redirectTo:'list',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
