import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { EmployeeComponent } from "./employee/employee.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductGetComponent } from "./product-get/product-get.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";

import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    EmployeeComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
