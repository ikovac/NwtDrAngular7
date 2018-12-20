import { Component, OnInit, Input } from '@angular/core';
import { RecenzijaInterface } from 'src/app/RecenzijaInterface';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  @Input() recenzije: RecenzijaInterface[];
  ocjene: number[] = [];

  constructor() { }

  ngOnInit() {
    this.ocjene = this.recenzije.map(rec => rec.ocjena);
  }

  getOcjena(): number {
    const sum = this.ocjene.reduce((suma, crntValue) => suma + crntValue);
    return Math.round((sum / this.ocjene.length));
  }

  onStarClick(ocjena: number) {
    this.ocjene.push(ocjena);
  }
}
