import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDialogModule,
} from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  TodoListComponent,
  DialogAddTodo,
  DialogLogin,
  DialogRegister,
} from './todo-list/todo-list.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,

    HttpModule,
  ],
  declarations: [
    AppComponent,
    TodoListComponent,
    DialogAddTodo,
    DialogLogin,
    DialogRegister,
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogAddTodo, DialogLogin, DialogRegister],
  providers: [],
})
export class AppModule {}
