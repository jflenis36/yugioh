import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RouterLink } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
import { Card } from '../../core/models/cards.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-duel-by-name',
  standalone: true,
  imports: [HeaderComponent, PlayerComponent, RouterLink, JsonPipe],
  templateUrl: './duel-by-name.component.html',
  styleUrl: './duel-by-name.component.scss',
})
export class DuelByNameComponent {
  player: Card | null = null;
  bot: Card | null = null;
  showWinner: boolean = false;
  showLoser: boolean = false;

  onCardChosen(event: any, player: string) {
    console.log('Card chosen:', event);

    if (player === 'bot') {
      this.bot = event;
    } else if (player === 'player') {
      this.player = event;
    }
  }

  onAttack() {
    if (this.player && this.bot) {
      if (this.player.atk && this.bot.def && this.player.atk > this.bot.def) {
          this.showWinner = true;
      } else if (this.player.atk && this.bot.def && this.player.atk < this.bot.def) {
          this.showLoser = true;
      } else {
          alert('El ataque ha fallado.');
      }

      setTimeout(() => {
          this.onReset();
      }, 2000);
    } else {
      console.warn('Both player and bot cards must be selected to attack.');
    }
  }
  //
  onDefend() {
    if (this.player && this.bot) {
      if (this.player.def && this.bot.atk && this.player.def > this.bot.atk) {
            this.showWinner = true;
      } else if (this.player.def && this.bot.atk && this.player.def < this.bot.atk) {
            this.showLoser = true;
      } else {
          alert('La defensa ha fallado.');
      }

      setTimeout(() => {
          this.onReset();
      }, 2000);

      // Implement defend logic here
    } else {
      console.warn('Both player and bot cards must be selected to defend.');
    }
  }

  onReset() {
    this.player = null;
    this.bot = null;
     this.showWinner = false;
     this.showLoser = false;
    console.log('Game reset. Player and bot cards cleared.');
  }


}
