import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Phrase {
  theme: string,
  sourceText: string,
  translation: string,
  color: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() phrase: Phrase;
  public editForm: FormGroup;
  public isCardOnEdit: boolean;
  public cardCurrentText: string;
  public isTranslated: boolean;
  constructor() {
    this.isTranslated = false;
    this.isCardOnEdit = false;
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      sourceText: new FormControl(this.phrase.sourceText),
      translation: new FormControl(this.phrase.translation),
    });
    this.cardCurrentText = this.phrase.sourceText;
  }

  public translateCard() {
    if (this.isCardOnEdit) return;
    this.isTranslated = !this.isTranslated;
  }

  public editInit() {
    this.isCardOnEdit = true;
  }

  public onAccept() {
    this.cardCurrentText = this.editForm.value.sourceText;
    this.phrase.sourceText = this.editForm.value.sourceText;
    this.phrase.translation = this.editForm.value.translation;
    this.isCardOnEdit = false;
  }
}
