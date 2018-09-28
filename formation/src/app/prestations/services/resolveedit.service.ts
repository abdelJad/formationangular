import { Injectable } from '@angular/core';
import { PrestationsService } from './prestations.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { Prestation } from '../../shared/models/prestation';

@Injectable({
  providedIn: 'root'
})
export class ResolveeditService implements Resolve<Prestation> {
   constructor(private prestationService: PrestationsService, private router: Router) {
}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  const id = route.paramMap.get('id');
  return this.prestationService.getPrestation(id).pipe(
    take(1),
     map(data => {
      if (data) {
        return data;
      } else {
        this.router.navigate(['/prestations']);
        return null;
      }
    })
  );
}
}
