import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { PicoPreviewComponent } from './components/pico-preview/pico-preview.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //   path:"",
  //   pathMatch: 'full',
  //   component: AppComponent
  // },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "pico-preview",
    component: PicoPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
