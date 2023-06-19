import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/services/module/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  listRoom: any;
  limit = 6;

  constructor(
    private roomService: RoomService,
    private toastService: ToastrService
  ) { }

  ngOnInit() {
    this.getRoom();
  }
  
  getRoom() {
    this.roomService.getRoom({}).subscribe(res => {
      if(res.errorCode === "0") {
        this.listRoom = res.data;
        this.limit = res.limit;
      }else {
        this.toastService.error(res.errorDesc);
      }
    })
    
  }

}
