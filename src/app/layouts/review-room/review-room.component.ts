import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReviewService } from 'src/app/services/module/review.service';

@Component({
  selector: 'app-review-room',
  templateUrl: './review-room.component.html',
  styleUrls: ['./review-room.component.css']
})
export class ReviewRoomComponent implements OnInit {

  @Input() roomId : string = '';

  listReview: any;
  arrayStar = new Array();
  form!: FormGroup;

  constructor(
    private reviewService: ReviewService,
    private toastService: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getReview();
    this.initForm();
    
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(25)]],
      description: [null, [Validators.required]],
      star: [5],
      roomId: [null, [Validators.required]],
      avatar: ['assets/img/room/avatar/avatar-default.jpg']
    })
  }

  getReview() {
    this.reviewService.getReview({roomId: this.roomId }).subscribe(res => {
      if(res.errorCode === "0") {
        this.listReview = res.data;
      }
    })
  }

  createRange(number: number) {
    return new Array(number).fill(0).map((n, index) => index+1);
  }

  formatDate(date: any) {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  onSubmit() {
    const json = this.form.value;
    json.roomId = this.roomId;
    
    this.reviewService.createReview(json).subscribe(res => {
      if(res.errorCode === "0") {
        this.toastService.success(res.errorDesc);
        this.getReview();
        this.initForm();
      }
    })
    
  }

}
