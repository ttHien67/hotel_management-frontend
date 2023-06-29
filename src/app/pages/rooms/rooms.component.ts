import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/services/module/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  title: String = "Rooms";
  listRoom: any;
  limit: number = 6;
  pageSize: number = 3;
  page: number = 1;

  roomsAvailable = history.state.data;

  constructor(
    private roomService: RoomService,
    private toastService: ToastrService
  ) { }

  ngOnInit() {
    if(this.roomsAvailable){
      this.listRoom = this.roomsAvailable
    }else {
      this.getRoom();
    }
    
  }
  
  getRoom() {
    const json = {
      limit: this.limit,
      page: this.page
    }

    this.roomService.getRoom(json).subscribe(res => {
      if(res.errorCode === "0") {
        this.listRoom = res.data; 
      }else {
        this.toastService.error(res.errorDesc);
      }
    })
    
  }

  onPageChange(e : any) {
    this.page = e;
  }

}
