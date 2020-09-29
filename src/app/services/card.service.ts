import { Injectable } from '@angular/core';
import {Card} from '../shared/card';
import {Product} from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public card : Card[] = [];
  constructor() { }

  getCards() : Card[] {
    return this.card;
  }

  addToCard(product : Product): void {
    var command : Card = {
      id: "7",
      description: "",
      price: 0,
      image: "",
      recommended: true,
      quantity:0
  };
    command.description = product.description;
    command.id = product.id;
    command.image = product.image;
    command.price = product.price;
    command.recommended = product.recommended;
    command.quantity = command.quantity+1;
    this.card.push(command);
    console.log(this.card);
    this.getCards();
  }
}
