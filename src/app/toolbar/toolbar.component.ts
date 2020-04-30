import { Component } from '@angular/core';
import { TitleService } from '../title.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  public componentTitle: string;
  private _titleSubject: BehaviorSubject<string>;

  constructor(private titleService: TitleService, private router: Router) {
    this._titleSubject = titleService.getTitleSubject();
    this._titleSubject.subscribe(str => this.componentTitle = str);
  }

  public backToMenu() {
    this.router.navigate(['']);
  } 
}
