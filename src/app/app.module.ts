import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabindComponent } from './shared/components/databind/databind.component';
import { DatabindingpracticeComponent } from './shared/components/databindingpractice/databindingpractice.component';
import { TodocrudeventbindComponent } from './shared/components/todocrudeventbind/todocrudeventbind.component';
import { StudentComponent } from './shared/components/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent,
    DatabindingpracticeComponent,
    TodocrudeventbindComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
