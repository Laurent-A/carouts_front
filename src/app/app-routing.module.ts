import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { VehiculeDetailsComponent } from './vehicule-details/vehicule-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/vehicules', pathMatch: 'full' },
  { path: 'vehicules', component: VehiculeComponent },
  { path: 'vehicule/:id', component: VehiculeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
