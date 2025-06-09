import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardResponse } from '../models/cards.interface';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YugiohService {
  private http = inject(HttpClient);
  private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  /**
   * Busca cartas por coincidencia parcial (ideal para autocomplete)
   */
  searchCardsByName(partialName: string) {
    const url = `${this.apiUrl}?fname=${encodeURIComponent(partialName)}`;

    return this.http.get<CardResponse>(url).pipe(
      catchError((err) => {
        return throwError(() => new Error('No se pudo obtener la carta'));
      })
    );
  }

  /**
   * Busca una carta exacta por su nombre completo
   */
  getCardByExactName(name: string) {
    const url = `${this.apiUrl}?name=${encodeURIComponent(name)}`;

    return this.http.get<CardResponse>(url).pipe(
      catchError((err) => {
        return throwError(() => new Error('Carta no encontrada'));
      })
    );
  }
}
