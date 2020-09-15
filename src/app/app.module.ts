import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './MonSite/toolbar/toolbar.component';
import { ListComponent } from './MonSite/list/list.component';
import { FooterComponent } from './MonSite/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
