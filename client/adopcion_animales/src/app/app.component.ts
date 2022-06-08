import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Animales } from './animales';
import { AnimalesService } from './animales.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Sistema de Adopción de Animales Domésticos';

  dataSource!: MatTableDataSource<Animales>;
  animales!:Animales[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selectedAnimal?: Animales;

  onSelect(animales: Animales): void {
    this.selectedAnimal = animales;
  }

  constructor(private animalesService:AnimalesService) {
    this.animalesService.getAnimales().subscribe(animales => {
      this.dataSource = new MatTableDataSource(animales);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  displayedColumns: string[] = ['nombre', 'vacuna', 'adoptado', 'caracteristicas', 'Action'];

  getAnimales(): void {
    this.animalesService.getAnimales().subscribe(animales => {
      this.dataSource = new MatTableDataSource(animales);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

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





