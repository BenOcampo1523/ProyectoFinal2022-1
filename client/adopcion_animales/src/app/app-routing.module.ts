import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AnimalDetallesComponent } from "./animal-detalles/animal-detalles.component";
import { AnimalFormComponent } from "./animal-form/animal-form.component";
import { AnimalListComponent } from "./animal-list/animal-list.component";
import { NavigationComponent } from "./navigation/navigation.component";

const routes: Routes = [{
  path: '',
  redirectTo: '/main',
  pathMatch: 'full'
},
{
  path: 'main',
  component: AnimalListComponent
},
{
  path: 'add',
  component: AnimalFormComponent
},
{
  path: 'edit/:id_animal',
  component: AnimalFormComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
