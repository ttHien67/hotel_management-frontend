import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CommandURL } from '../commands/api.command';
import { BaseListResponse } from 'src/app/models/base-list-response.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(
    private http: HttpClient
  ) { }

  private header = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  getRoom(payload: any) {
    return this.http.post<BaseListResponse>(CommandURL.ROOM + '/getRoom', payload, {headers: this.header});
  }

  checkRoom(payload: any) {
    return this.http.post<BaseListResponse>(CommandURL.ROOM + '/checkRoom', payload, {headers: this.header});
  }
}
