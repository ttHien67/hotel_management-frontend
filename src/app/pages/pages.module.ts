import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { PacketRoomComponent } from '../layouts/packet-room/packet-room.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { BlogComponent } from './home/blog/blog.component';
import { BreadCrumbComponent } from '../layouts/bread-crumb/bread-crumb.component';
import { RoomComponent } from '../layouts/room/room.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { BookingFormComponent } from '../layouts/booking-form/booking-form.component';
import { ContactComponent } from './contact/contact.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ReviewRoomComponent } from '../layouts/review-room/review-room.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PagesComponent } from './pages.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    PagesRoutingModule,
    CarouselModule,
    NgxPaginationModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
    RoomsComponent,
    SidebarComponent,
    PacketRoomComponent,
    AboutUsComponent,
    BlogComponent,
    BreadCrumbComponent,
    RoomComponent,
    RoomDetailComponent,
    BookingFormComponent,
    ContactComponent,
    ReviewRoomComponent,
    IntroductionComponent,
    PagesComponent,
    SidebarComponent,
    AboutUsComponent,
    PacketRoomComponent,
    BlogComponent
  ]
})
export class PagesModule { }
