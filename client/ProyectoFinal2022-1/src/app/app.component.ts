import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Animales } from './animales';
import { AnimalesService } from './animales.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private animalesService:AnimalesService) {
    this.animalesService.getAnimales().subscribe(animales => {
      this.dataSource = new MatTableDataSource(animales);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  dataSource!: MatTableDataSource<Animales>;
  animales!:Animales[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['Nombre', 'Vacuna', 'Adoptado', 'Características'];

  getAnimales(): void {
    this.animalesService.getAnimales().subscribe(animales => {
      this.animales=animales;
    });

    console.log(this.animales);
  }

  addAnimales(): void {

  }

  updateAnimales(): void {

  }

  deleteAnimales(): void {

  }




  ngOnInit(): void {

  }
}





