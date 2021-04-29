import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CustomerComponent },
    ]),
  ],
  declarations: [CustomerComponent],
})
export class EmployeeUiModule {}
