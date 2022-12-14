import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AwesomeUiFeatureCartModule } from '@fundamentalconf/awesome-ui/feature-cart';
import { AwesomeUiFeatureProductsModule } from '@fundamentalconf/awesome-ui/feature-products';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, AwesomeUiFeatureProductsModule, AwesomeUiFeatureCartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
