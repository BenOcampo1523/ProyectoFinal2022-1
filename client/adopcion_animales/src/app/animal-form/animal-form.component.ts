import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { Animales } from '../animales';
import { AnimalesService } from '../animales.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  animal: Animales = {
    id_animal: 0,
    nombre: '',
    vacuna: false,
    adoptado: '',
    caracteristicas: ''
  };

  editFlag: boolean = false;

  constructor(
    private servicio: AnimalesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if(params['id_animal']) {
      this.servicio.getAnimal(params['id_animal']).subscribe(
        res => {
          console.log(res);
          this.animal = res;
          this.editFlag = true;
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
    delete this.animal.id_animal;

    this.servicio.addAnimal(this.animal).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/main']);
      },
      err => { console.error(err) }
    )
  }

  editAnimal() {
    this.servicio.updateAnimal(this.animal.id_animal, this.animal).subscribe(
      res => { console.log(res); },
      err => { console.error(err); }
    )
  }
}
