import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { ContactComponent } from './contact/contact.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"rooms",
    component: RoomsComponent
  },
  {
    path:"room/:id",
    component: RoomDetailComponent
  },
  {
    path:"contact",
    children: [
      {
        path: ':id',
        component: ContactComponent
      },
      {
        path: '',
        component: ContactComponent
      } 
    ]
  },
  {
    path: 'about-us',
    component: IntroductionComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
