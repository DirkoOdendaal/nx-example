import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UiSharedModule } from '@nx-example/ui-shared';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'items/:id',
          loadChildren: () =>
            import('@nx-example/customer/ui').then(
              (module) => module.CustomerUiModule
            ),
        },
      ],
      { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' }
    ),
    UiSharedModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
