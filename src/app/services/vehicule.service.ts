import { Injectable } from '@angular/core';
import { Vehicule } from '../models/vehicule.model';
import { Facture } from '../models/facture.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  private vehicules: Vehicule[] = [
    { id: 1, nom: 'Voiture 1', kilometrage: 50000, description: 'Description de la voiture 1', factures: [] },
    { id: 2, nom: 'Voiture 2', kilometrage: 70000, description: 'Description de la voiture 2', factures: [] },
  ];

  constructor() { 
    this.vehicules.forEach(voiture => {
      voiture.factures = this.generateFactures();
    });
  }

  getVehicules(): Vehicule[] {
    return this.vehicules;
  }

  addVehicule(vehicule: Vehicule) {
    this.vehicules.push({ ...vehicule });
  } 

  getVehiculeById(vehiculeId: number): any {
    console.log(this.vehicules);
    return this.vehicules.find((vehicule) => vehicule.id == vehiculeId);
  }

  deleteVehicule(vehicule: Vehicule): void {
    const index = this.vehicules.findIndex(v => v.id === vehicule.id);
    if (index !== -1) {
      this.vehicules.splice(index, 1);
    }
  }

  private generateFactures(): Facture[] {
    // Logique de génération de factures (exemple)
    const factures: Facture[] = [];
    for (let i = 0; i < 3; i++) {
      factures.push({ id: i + 1,
      prestataire: "prestataire"+i+1, 
      realisation : "",
      description : "",
      prix: Math.random() * 1000, 
      date: new Date() 
      });
    }
    return factures;
  }
}
