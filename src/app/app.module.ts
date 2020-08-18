import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Covid19Component } from './covid19/covid19.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformvalidationComponent } from './reactiveformvalidation/reactiveformvalidation.component';
import {MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    Covid19Component,
    ReactiveformComponent,
    ReactiveformvalidationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [Covid19Component]
})
export class AppModule { }
