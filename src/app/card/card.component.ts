import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Card } from '../shared/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public cards : Card[] = [];
  constructor(private cardService : CardService) { }

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
  }

  

}
