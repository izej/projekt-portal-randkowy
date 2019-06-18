import {NgModule} from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BlockUIModule} from 'primeng/blockui';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  exports: [
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    BlockUIModule,
    PanelModule,
    SidebarModule
  ]
})

export class AppPrimengModule {}
