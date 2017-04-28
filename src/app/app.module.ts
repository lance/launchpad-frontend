import './rxjs-extensions';

import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component'

// conditionally import the inmemory resource module
var moduleImports: Array<any[] | any | ModuleWithProviders> = [
  BrowserModule,
  AppRoutingModule
];

@NgModule({
  imports: moduleImports,
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
