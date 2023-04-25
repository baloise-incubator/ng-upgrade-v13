import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  BalCoreModule,
  BalButtonModule,
  BalHeadingModule,
  BalTableModule,
  BalAccordionModule,
  BalStackModule,
  BalContentModule,
  BalIconModule,
  BalCheckboxModule,
  BalLabelModule,
  BalTextModule,
  BalPopoverModule,
  BalInputModule,
  BalNotificationModule,
} from '@baloise/design-system-components-angular';

import { AppComponent } from './app.component';
import { StylesComponent } from './styles/styles.component';
import { StepsComponent } from './steps/steps.component';
import { ActiveComponent } from './active/active.component';
import { TypesComponent } from './types/types.component';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    StylesComponent,
    StepsComponent,
    ActiveComponent,
    TypesComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // Enables the usage of ngModel on form components
    FormsModule,
    ReactiveFormsModule,
    // Enables the Design System globally for your application
    BalCoreModule.forRoot(),
    // Import the Design System components
    BalButtonModule,
    BalHeadingModule,
    BalTableModule,
    BalAccordionModule,
    BalStackModule,
    BalContentModule,
    BalIconModule,
    BalCheckboxModule,
    BalLabelModule,
    BalTextModule,
    BalPopoverModule,
    BalInputModule,
    BalNotificationModule,
    BalTableModule,
    // Third Party Modules
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // To enable the usage of Web Components inside the Angular templates.
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
