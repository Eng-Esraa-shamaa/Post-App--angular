import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http'
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './views/home/home.component';

import { PostsComponent } from './views/posts/posts.component';
import { AboutComponent } from './views/about/about.component';
import { AnimationdefaultComponent } from './views/animationdefault/animationdefault.component';
import { UserComponent } from './views/user/user.component';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { SinglepostComponent } from './views/singlepost/singlepost.component';
import { EditpostComponent } from './views/editpost/editpost.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
    PostsComponent,
    AboutComponent,
    AnimationdefaultComponent,
    UserComponent,
    SinglepostComponent,
    EditpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService ,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
