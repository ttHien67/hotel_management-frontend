import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/services/module/room.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  
  title: String = "Room";
  roomInfo: any;
  idSlug: any;

  constructor(
    private _route: ActivatedRoute,
    private roomService: RoomService,
    private toastService: ToastrService
  ) { }

  ngOnInit() {
    this.getRoom();
  }

  getRoom() {
    this.idSlug = this._route.snapshot.paramMap.get('id');

    this.roomService.getRoom({id: this.idSlug}).subscribe(res => {
      if(res.errorCode === '0') {
        this.roomInfo = res.data;
      }else {
        this.toastService.error("Get room detail failed!!");
      }
    });
    
  }

}
