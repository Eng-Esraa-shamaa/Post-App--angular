import { animate } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { AnimationdefaultComponent } from './views/animationdefault/animationdefault.component';
import { EditpostComponent } from './views/editpost/editpost.component';
import { HomeComponent } from './views/home/home.component';
import { PostsComponent } from './views/posts/posts.component';
import { SinglepostComponent } from './views/singlepost/singlepost.component';
import { UserComponent } from './views/user/user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'posts',component:PostsComponent},
  {path:'about',component:AboutComponent},
  {path:'animation',component:AnimationdefaultComponent},
  {path:'users',component:UserComponent},
  {path:'posts/:id', component:SinglepostComponent},
  {path:'updateposts/:id', component:EditpostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
