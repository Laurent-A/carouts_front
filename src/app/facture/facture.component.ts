import { Component, Input, OnInit } from '@angular/core';
import { NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Facture } from '../models/facture.model';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {
  
  @Input() facture: Facture | undefined;
  modalRef: NgbModalRef | undefined;
  factureSelectionnee : any;
  modalSatut = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.factureSelectionnee = this.facture;
    this.modalSatut;
    console.log(this.facture);
  }

  fermerModal(): void {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  toggleEdition(): void {
    this.modalSatut = !this.modalSatut;
  }
}
