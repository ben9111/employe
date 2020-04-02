import { Injectable } from '@angular/core';
import { userData } from './interfaces/userData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataMapUsers: Map<number, userData> = new Map<number, userData>()
  constructor() { }

  setNewData(data: userData[]): void {
    this.dataMapUsers.clear();
    data.map((res: userData) => {
      if (!this.dataMapUsers.get(res.id)) {
        this.dataMapUsers.set(res.id, res);
      }
    })
  }

  getUserInfo(userId: number) {
    return this.dataMapUsers.get(userId);
  }
}
