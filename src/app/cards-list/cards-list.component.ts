import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup } from '@angular/forms';
import { phrases } from '../phrases';
import { TitleService } from '../title.service';

interface PhraseWithColor {
  theme: string,
  sourceText: string,
  translation: string,
  color: string
}

const COLORS = [
  '#F73B66',
  '#FFD700',
  '#B4D929',
  '#D94829',
];

const COLUMNS_NUMBER: number = 3;

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {
  public randomPhrases: Array<PhraseWithColor>;
  public columns: Array<Array<PhraseWithColor>>;
  public newCardForm: FormGroup;

  constructor(private titleService: TitleService) {
    this.randomPhrases = [];
    this.columns = [];
    this.setPhrasesColor();
    this.shuffleArray();
    this.putPhrasesInColumns();
    this.putCardsInOrder();
    this.newCardForm = new FormGroup({
      title: new FormControl(),
      sourceText: new FormControl(),
      translation: new FormControl(),
    });
  }

  ngOnInit() {
    this.titleService.setTitle('CARDS');
  }

  public drop(event: CdkDragDrop<string[]>) {
    let currentIndex: number = +event.container.data;
    let previousIndex: number = +event.previousContainer.data;
    if (event.previousContainer === event.container) {
      moveItemInArray(this.columns[currentIndex], event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(this.columns[previousIndex],
        this.columns[currentIndex],
        event.previousIndex,
        event.currentIndex);
    }
  }

  public createNewCard() {
    let rndColumn = Math.floor(Math.random() * 3);
    let newCard: PhraseWithColor = {
      theme: this.newCardForm.value.title,
      sourceText: this.newCardForm.value.sourceText,
      translation: this.newCardForm.value.translation,
      color: this.getRandomColor()
    }
    this.columns[rndColumn].push(newCard);
    this.newCardForm.reset();
  }

  private shuffleArray() {
    let rnd: number;
    for (let i = this.randomPhrases.length - 1; i > 0; i--) {
      rnd = Math.floor(Math.random() * (i + 1));
      [this.randomPhrases[rnd], this.randomPhrases[i]] = [this.randomPhrases[i], this.randomPhrases[rnd]];
    }
  }

  private setPhrasesColor() {
    phrases.forEach((item, i) => {
      let rndColor: string = this.getRandomColor();
      this.randomPhrases[i] = Object.create(item, { color: { value: rndColor } });
    });
  }

  private putPhrasesInColumns() {
    for (let j = 0; j < COLUMNS_NUMBER; j++) {
      let buff: Array<PhraseWithColor> = [];
      for (let i = 0; i < Math.ceil(this.randomPhrases.length / COLUMNS_NUMBER); i++) {
        let currentElem: number = i * COLUMNS_NUMBER + j;
        if (this.randomPhrases[currentElem]) {
          buff[i] = this.randomPhrases[currentElem];
        }
      }
      this.columns[j] = buff;
    }
  }

  private putCardsInOrder() {
    for (let i = 0; i < this.columns.length; i++) {
      this.columns[i].sort((a, b) => {
        return this.countWords(b.sourceText) - this.countWords(a.sourceText);
      });
    }
  }

  private countWords(str: string): number {
    return str.trim().split(/\s+/).length;
  }

  private getRandomColor(): string {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }
}
