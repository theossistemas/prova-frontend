import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/LocalStorageUtils';


@Injectable()
export class DevelperGuard implements CanActivate {

    localStorageUtils = new LocalStorageUtils();

    constructor(private router: Router) { }

    canActivate(routeAc: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (!this.localStorageUtils.getUserToken()) {
            this.router.navigate(['/account/login']);
        }

        let user = this.localStorageUtils.getUser();
        let claim: any = routeAc.data[0];

        if (claim !== undefined) {
            let claim = routeAc.data[0]['claim'];

            if (claim) {
                if (!user.claims) {
                    this.goAcessDenied();
                }

                let userClaims = user.claims.find(x => x.type === claim.nome);

                if (!userClaims) {
                    this.goAcessDenied();
                }

                let claimValues = userClaims.value as string;

                if (!claimValues.includes(claim.valor)) {
                    this.goAcessDenied();
                }
            }
        }

        return true;
    }

    goAcessDenied() {
        this.router.navigate(['/acesso-negado']);
    }
}
