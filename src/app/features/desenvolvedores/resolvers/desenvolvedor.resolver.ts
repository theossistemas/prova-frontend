import { Injectable } from '@angular/core';

import { Desenvolvedor } from '../models/desenvolvedor';
import { DesenvolvedorService } from '../services/desenvolvedor.service';
import { EntidadeParamIdResolver } from '../../../shared/services/entidade-param-id.resolver';

@Injectable({ providedIn: 'root' })
export class DesenvolvedorResolver extends EntidadeParamIdResolver<Desenvolvedor> {
    constructor(protected service: DesenvolvedorService) {
        super(service, 'idDesenvolvedor');
    }
}
