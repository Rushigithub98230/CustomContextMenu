import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SharedModule 
    // Only import SharedModule here if you want its components, directives, and pipes to be available globally. 
    // Otherwise, each feature module should import SharedModule individually as needed in their module.ts. 
    // Importing here makes SharedModule globally accessible across the entire application.

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
