import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminFeatureControlDashboardModule } from '@fundamentalconf/admin/feature-control-dashboard';
import { AdminFeatureUsermanagementModule } from '@fundamentalconf/admin/feature-user-management';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, AdminFeatureControlDashboardModule, AdminFeatureUsermanagementModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
