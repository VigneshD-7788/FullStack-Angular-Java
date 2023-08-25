import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullStackComponent } from './full-stack/full-stack.component';
import { HttpClientModule } from  '@angular/common/http';
import { MatTableComponent } from './mat-table/mat-table.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MatTableModule } from '@angular/material/table';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ParentTwoComponent } from './parent-two/parent-two.component';
import { ChildTwoComponent } from './child-two/child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    FullStackComponent,
    MatTableComponent,
    ParentComponent,
    ChildComponent,
    RegisterComponent,
    ParentTwoComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
