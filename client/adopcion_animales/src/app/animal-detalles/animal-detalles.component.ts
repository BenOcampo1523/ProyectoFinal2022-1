import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animales } from '../animales';
import { AnimalesService } from '../animales.service';

@Component({
  selector: 'app-animal-detalles',
  templateUrl: './animal-detalles.component.html',
  styleUrls: ['./animal-detalles.component.css']
})

export class AnimalDetallesComponent implements OnInit {
  @Input() animal?: Animales;

  @Output() valueChosen: EventEmitter<any> = new EventEmitter();
  @Output() editAnimales = new EventEmitter<Animales>();

  public choose(value: string) {
    this.valueChosen.emit(value);
  }

  constructor(
    private servicio: AnimalesService
  ) { }

  ngOnInit(): void {

  }

}
