import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseListResponse } from 'src/app/models/base-list-response.model';
import { CommandURL } from '../commands/api.command';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private http: HttpClient
  ) { }

  private header = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  getReview(payload: any) {
    return this.http.post<BaseListResponse>(CommandURL.REVIEW + '/getReview',payload, {headers: this.header});
  }

  createReview(payload: any) {
    return this.http.post<BaseListResponse>(CommandURL.REVIEW + '/createReview', payload, {headers: this.header});
  }

}
