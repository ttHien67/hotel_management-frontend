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

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    HomeComponent,
    RoomsComponent,
    SidebarComponent,
    PacketRoomComponent,
    AboutUsComponent
  ]
})
export class PagesModule { }
