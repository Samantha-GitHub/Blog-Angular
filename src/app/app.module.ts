import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FormularioComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
