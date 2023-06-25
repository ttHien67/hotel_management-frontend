import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/services/module/room.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  @Input() item: any;

  guest: any = [
    {id: 2, name: '2 adults'},
    {id: 3, name: '3 adults'},
  ]

  room: any = [
    {id: 1, name: '1 room'},
    {id: 2, name: '2 room'},
  ]

  datein: String = '';
  dateout: String = '';
  form: any;
  isSubmit: Boolean = false;
  isAvailableDay: Boolean = true;

  today = new Date().toISOString().split('T')[0];

  constructor(
    private formBuilder: FormBuilder,
    private roomService: RoomService,
    private toastService: ToastrService
  ) { }
  
  get f(){
    return this.form.controls;
  }

  ngOnInit() {
    
    this.initForm();
    
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [this.item ? this.item?.id : null ],
      checkIn: [null, [Validators.required]],
      checkOut: [null, [Validators.required]],
      quantityGuest: [null, [Validators.required]],
      quantityRoom: [null, [Validators.required]],
    })
  }

  onSubmit() {
    this.isSubmit = true;
    this.isAvailableDay = Date.parse(this.f.checkIn.value) <= Date.parse(this.f.checkOut.value);

    if(this.form.status === 'VALID' && this.isAvailableDay) {
      const json = this.form.value;
      this.roomService.checkRoom(json).subscribe(res => {
        if(res.errorCode === '0') {
          this.toastService.success(res.errorDesc);
        }else {
          this.toastService.error(res.errorDesc);
        }
      })
    }else {
      console.log("loi");
      
    }
    
    
    
    
  }

}
