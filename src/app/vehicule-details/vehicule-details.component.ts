import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeService } from '../services/vehicule.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Facture } from '../models/facture.model';
import { FactureComponent } from '../facture/facture.component';

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.scss']
})
export class VehiculeDetailsComponent implements OnInit {
  @ViewChild('content') contentRef!: TemplateRef<any>;
  modalRef: NgbModalRef | undefined;
  vehicule: any;
  factureSelectionnee: Facture | undefined;

  constructor(
    private route: ActivatedRoute, 
    private vehiculeService: VehiculeService, 
    private router: Router, 
    private modalService: NgbModal) {}


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const voitureId = params['id'];
      this.vehicule = this.vehiculeService.getVehiculeById(voitureId);
    });
  }

  retourner(): void {
    this.router.navigate(['/vehicules']);
  }

  ouvrirModalFacture(facture: Facture): void {
    this.factureSelectionnee = facture;
    const modalRef = this.modalService.open(FactureComponent);
    modalRef.componentInstance.facture = this.factureSelectionnee;
  }

  openModal(content: TemplateRef<any>): void {
    this.modalRef = this.modalService.open(content, { centered: true });
  }

  supprimerFacture(facture: Facture): void {

  }
}
