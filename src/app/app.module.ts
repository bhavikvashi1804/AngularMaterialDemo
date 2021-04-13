import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuDemoComponent } from './menu-demo/menu-demo.component';
import { ListDemoComponent } from './list-demo/list-demo.component';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { ExpansionDemoComponent } from './expansion-demo/expansion-demo.component';
import { CardDemoComponent } from './card-demo/card-demo.component';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';
import { StepperDemoComponent } from './stepper-demo/stepper-demo.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { SelectDemoComponent } from './select-demo/select-demo.component';
import { AutoComplDemoComponent } from './auto-compl-demo/auto-compl-demo.component';
import { CheckboxDemoComponent } from './checkbox-demo/checkbox-demo.component';
import { RadioDemoComponent } from './radio-demo/radio-demo.component';
import { DatepickDemoComponent } from './datepick-demo/datepick-demo.component';
import { TooptipComponent } from './tooptip/tooptip.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { ScrollDemoComponent } from './scroll-demo/scroll-demo.component';
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
    GridDemoComponent,
    ExpansionDemoComponent,
    CardDemoComponent,
    TabsDemoComponent,
    StepperDemoComponent,
    InputDemoComponent,
    SelectDemoComponent,
    AutoComplDemoComponent,
    CheckboxDemoComponent,
    RadioDemoComponent,
    DatepickDemoComponent,
    TooptipComponent,
    SnackbarDemoComponent,
    DialogDemoComponent,
    DialogExampleComponent,
    TableDemoComponent,
    ScrollDemoComponent,
  ],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
