import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { LoadingComponent } from './loading/loading.component';
import { NavDemoComponent } from './nav-demo/nav-demo.component';
import { SlideNavDemoComponent } from './slide-nav-demo/slide-nav-demo.component';
import { FormsModule } from '@angular/forms';
import { MenuDemoComponent } from './menu-demo/menu-demo.component';
import { ListDemoComponent } from './list-demo/list-demo.component';
//refer this link for imports: https://stackoverflow.com/questions/58594311/angular-material-index-d-ts-is-not-a-module

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    IconsComponent,
    BadgesComponent,
    LoadingComponent,
    NavDemoComponent,
    SlideNavDemoComponent,
    MenuDemoComponent,
    ListDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
