import { CommonModule, JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { YugiohService } from '../../../../core/services/yugioh.service';
import { Card } from '../../../../core/models/cards.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
     CommonModule, 
     FormsModule
],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  @Input() playerName: string = 'bot';
  @Input() pathImage: string = '';
  @Output() cardChosenEvent: EventEmitter<Card> = new EventEmitter<Card>();
  debounceTimer: any;
  cards: Card[] = [];
  cardChosen: Card | null = null;
  currentCardName: string = '';
  private yugiohService = inject(YugiohService);

  onCardNameChange(event: any) {
    const cardName = event.target.value;
    clearTimeout(this.debounceTimer); // Reinicia el temporizador

    this.debounceTimer = setTimeout(() => {
      this.loadCards(cardName);
    }, 1000); // 1 segundo sin escribir
  }

  private loadCards(cardName: string) {
    if (!cardName) {
      console.warn('No se proporcionó un nombre de carta válido');
      return;
    }
    this.yugiohService.searchCardsByName(cardName).subscribe({
      next: (response) => {
        this.cards = response.data.slice(0, 5); // Limita a las primeras 5 cartas
        console.log('cards:', this.cards);
      },
      error: (error) => {
        console.error('Error al cargar las cartas:', error);
      },
    });
  }

  onCardClick(card: Card) {
    this.cardChosen = card;
    this.cards = [];
    this.currentCardName = card.name;
    this.cardChosenEvent.emit(card);
  }
}
