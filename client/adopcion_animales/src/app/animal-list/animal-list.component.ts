import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Animales } from '../animales';
import { AnimalesService } from '../animales.service';
import { AnimalDetallesComponent } from '../animal-detalles/animal-detalles.component';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})

export class AnimalListComponent implements OnInit {
  title = 'Sistema de Adopción de Animales Domésticos';

  dataSource!: MatTableDataSource<Animales>;
  animales!:Animales[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(AnimalDetallesComponent) animal?: Animales;

  constructor(private animalesService:AnimalesService) {
    delete this.animal?.caracteristicas;

    this.animalesService.getAnimales().subscribe(animales => {
      this.dataSource = new MatTableDataSource(animales);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  selectedAnimal?: Animales;

  onSelect(animales: Animales): void {
    this.selectedAnimal = animales;
  }

  displayedColumns: string[] = ['nombre', 'vacuna', 'adoptado', 'Action'];

  getAnimales(): void {
    delete this.animal?.caracteristicas;

    this.animalesService.getAnimales().subscribe(animales => {
      this.dataSource = new MatTableDataSource(animales);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteAnimal(id_animal: number) {
    let text = `¿Estás seguro de que quieres eliminar este animal?`;
    if (confirm(text) == true) {
      this.animalesService.deleteAnimal(id_animal).subscribe(
        res => {
          console.log(res);
          this.getAnimales();
        },
        err => { console.error(err) }
      )
    }
  }

 //

  ngOnInit(): void {
    this.getAnimales();
  }

  ngAfterViewInit() {

  }

  openDialog(element:any): void {
    element = element;
    console.log(element);
  }
}





