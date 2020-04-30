import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private _title: BehaviorSubject<string>;

  constructor() {
    this._title = new BehaviorSubject<string>('');
  }

  public getTitleSubject(): BehaviorSubject<string> {
    return this._title;
  }

  public setTitle(newTitle: string) {
    this._title.next(newTitle);
  }
}
