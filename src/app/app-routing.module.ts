import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component' 
import {HomeComponent} from './home/home.component'
import {LessonsComponent} from './lessons/lessons.component'
import {ReverbComponent} from './reverb/reverb.component'
import {RockShopComponent} from './rock-shop/rock-shop.component'

const routes: Routes = [
  {path: "" , component: HomeComponent},
  {path: "contact" , component: ContactComponent},
  {path: "lessons" , component: LessonsComponent},
  {path: "reverb" , component: ReverbComponent},
  {path: "rockshop" , component: RockShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
