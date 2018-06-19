import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


const routes = [
      {path:'registration-form', component: RegistrationFormComponent},
      {path:'to-do-list', component: ToDoListComponent }
    ]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
