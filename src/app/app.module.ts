import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

<<<<<<< HEAD
import {MatInputModule } from '@angular/material/input';
import {MatCardModule } from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { PostListComponent } from './post-list/post-list.component';
import {MatExpansionModule} from '@angular/material/expansion'; 

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
=======
// import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, PostCreateComponent],
>>>>>>> b5041481cf923a9c4d39daa001dd39ce5ab98d8c
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
=======
>>>>>>> b5041481cf923a9c4d39daa001dd39ce5ab98d8c
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
