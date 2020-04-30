import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  constructor(private router: Router, private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('MENU');
  }

  public goToCards() {
    this.router.navigate(['/cards']);
  }
  public goToSettings() {
    this.router.navigate(['/settings']);
  }
  public goToProfile() {
    this.router.navigate(['/profile']);
  }
  public goToTree() {
    this.router.navigate(['/tree']);
  }
}
