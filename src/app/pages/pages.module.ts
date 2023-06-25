import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
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
    ContactComponent
  ]
})
export class PagesModule { }
