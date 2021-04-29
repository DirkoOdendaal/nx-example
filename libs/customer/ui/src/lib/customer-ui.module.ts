import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ProductComponent },
    ]),
  ],
  declarations: [ProductComponent],
})
export class CustomerUiModule {}
