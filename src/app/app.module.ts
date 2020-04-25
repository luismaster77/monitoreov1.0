import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule, NbMenuModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbSidebarService, NB_THEME_OPTIONS } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(name['dark']),
    NbMenuModule.forRoot(),
    NbSidebarModule,
    NbLayoutModule,
    HomePageModule,
    NbButtonModule,
    HttpClientModule,
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
