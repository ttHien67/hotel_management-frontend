import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/services/module/room.service';

@Component({
  selector: 'app-packet-room',
  templateUrl: './packet-room.component.html',
  styleUrls: ['./packet-room.component.css']
})
export class PacketRoomComponent implements OnInit {

  listRoom: any;
  page = 1;
  limit = 4;

  constructor(
    private roomService: RoomService,
    private toastService: ToastrService
  ) { }

  ngOnInit() {
    this.getRoom();
  }

  getRoom() {
    const json = {
      limit: this.limit,
      page: this.page
    }
    this.roomService.getRoom(json).subscribe(res => {
      if(res.errorCode === '0'){
        this.listRoom = res.data;
      }else {
        this.toastService.error(res.errorDesc);
      }
    })
  }
}
