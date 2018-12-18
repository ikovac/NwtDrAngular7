import { RecenzijaInterface } from './RecenzijaInterface';

export interface ProductInterface {
  id: number;
  naziv: string;
  image_name: string;
  cijena: number;
  opis: string;
  favorit: boolean;
  recenzije: RecenzijaInterface[];
}
