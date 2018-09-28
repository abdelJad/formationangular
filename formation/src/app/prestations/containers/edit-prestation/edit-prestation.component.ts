import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
   public prestation: Prestation;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private prestationService: PrestationsService) { }

    ngOnInit() {
    this.activatedRoute.data
    .subscribe((data: { item: Prestation }) => {
      this.prestation = data.item;
  });
  }

  public update(presta: Prestation): void {
    this.prestationService.update(presta).then(() => {
      this.router.navigate(['/prestations']);
    });
  }

}
