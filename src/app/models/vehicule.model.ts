import { Facture } from "./facture.model";

export interface Vehicule {
    id: number;
    nom: string;
    kilometrage: number;
    description: string;
    factures: Facture[];
  }
  