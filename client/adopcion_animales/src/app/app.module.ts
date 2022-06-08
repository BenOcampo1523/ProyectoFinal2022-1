import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AnimalDetallesComponent } from './animal-detalles/animal-detalles.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { CustomMatPaginatorIntl } from 'src/customCode/CustomMatPaginatorIntl';

@NgModule({
  declarations: [
    AppComponent,
    AnimalDetallesComponent,
    NavigationComponent,
    AnimalFormComponent,
    AnimalListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatSliderModule,
    RouterModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: CustomMatPaginatorIntl
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
