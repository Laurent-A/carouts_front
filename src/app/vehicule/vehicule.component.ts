import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importez le service de routage
import { VehiculeService } from '../services/vehicule.service';
import { Vehicule } from '../models/vehicule.model';
import { Facture } from '../models/facture.model';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})

export class VehiculeComponent implements OnInit {

  vehicules: Vehicule[] = [];
  factures: Facture[] =[]
  nouveauVehicule: Vehicule = { id:this.vehicules.length+1, nom: '', kilometrage: 0, description: '', factures: this.factures };

  afficherFormulaire: boolean = false;

  constructor(private vehiculeService: VehiculeService, private router: Router) {}

  ngOnInit(): void {
    this.vehicules = this.vehiculeService.getVehicules();
  }

  ajouterVehicule(): void {
    if (this.nouveauVehicule.nom && this.nouveauVehicule.kilometrage && this.nouveauVehicule.description) {
      this.nouveauVehicule.id = this.vehicules.length+1;
      this.vehiculeService.addVehicule(this.nouveauVehicule);
      this.afficherFormulaire = false;
    }
  }

  basculerAffichageFormulaire(): void {
    this.afficherFormulaire = !this.afficherFormulaire;
  }

  allerVersDetails(vehiculeId: number): void {
    this.router.navigate(['/vehicule', vehiculeId]);
  }

  supprimerVehicule(vehicule: Vehicule): void {
    this.vehiculeService.deleteVehicule(vehicule);
    this.vehicules = this.vehicules.filter(v => v !== vehicule);
  }

}
