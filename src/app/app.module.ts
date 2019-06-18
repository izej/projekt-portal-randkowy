import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { services } from './rest-api/services';
import { components } from './components';
import { AppPrimengModule } from './app-primeng/app-primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppPrimengModule,
    FormsModule
  ],
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule {}
