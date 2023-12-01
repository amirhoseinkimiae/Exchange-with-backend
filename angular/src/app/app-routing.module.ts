import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/about/about.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { HomeComponent } from 'src/app/home/home.component';
import { PostComponent } from './post/post.component';
import { GolleryComponent } from './gollery/gollery.component';

const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"about",component:AboutComponent},
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"post",component:PostComponent},
  {path:"gollery",component:GolleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
