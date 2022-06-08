import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { Animales } from '../animales';
import { AnimalesService } from '../animales.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  constructor(
    private servicio: AnimalesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  animal: Animales = {
    id_animal: 0,
    nombre: '',
    vacuna: false,
    adoptado: '',
    caracteristicas: ''
  };

  edit: boolean = false;

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if(params['id_animal']) {
      this.servicio.getAnimal(params['id_animal']).subscribe(
        res => {
          console.log(res);
          this.animal = res;
          this.edit = true;
        },
        err => { console.error(err) }
      )
    }
  }

  @Output() valueChosen: EventEmitter<any> = new EventEmitter();

  public choose(value: string) {
    this.valueChosen.emit(value);
  }

  guardarAnimal() {
    this.servicio.addAnimal(this.animal).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/main']);
      },
      err => { console.error(err) }
    )
  }

  editAnimal() {
    const params = this.activeRoute.snapshot.params;
    this.servicio.updateAnimal(params['id_animal'] , this.animal).subscribe(
      res => { console.log(res); },
      err => { console.error(err); }
    )
  }
}
