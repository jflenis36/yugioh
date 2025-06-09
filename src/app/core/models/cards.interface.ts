export interface CardImage {
  id: number;
  image_url: string;
  image_url_small: string;
}

export interface Card {
  id: number;
  name: string;
  atk?: number;
  def?: number;
  type: string;
  desc: string;
  card_images: CardImage[];
}

export interface CardResponse {
  data: Card[];
}
