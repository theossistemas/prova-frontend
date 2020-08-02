import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../../../core/service/storage/storage.service';
import { DEV_CONFIG } from '../dev.config';
import { Dev } from '../model/dev';
import { DevSearch } from '../model/dev-search';
import { FormacaoAcademicaEnum } from '../../../shared/enum/formacao-academica.enum';

@Injectable({
  providedIn: 'root'
})
export class DevService {
  private dev: Dev;

  private devs: Array<Dev>;

  public devsBS: BehaviorSubject<Array<Dev>> = new BehaviorSubject(undefined);

  constructor(private storageService: StorageService) {}

  private setStorage(devs: Array<Dev>): void {
    this.storageService.setItem(DEV_CONFIG.storageKey, JSON.stringify(devs));
    this.devsBS.next(this.getAllLastDevs());
  }

  public create(dev: Dev): Dev {
    this.dev = new Dev();
    this.dev = this.getAll().filter(
      (devItem) => devItem.email === dev.email || devItem.gitHubLogin === dev.gitHubLogin
    )[0];

    if (!this.dev) {
      this.dev = dev;
      this.dev.id = this.getLast()?.id ? this.getLast()?.id + 1 : 1;

      this.devs = this.getAll();
      this.devs.push(this.dev);

      this.setStorage(this.devs);
      return this.dev;
    }

    return undefined;
  }

  public search(devSearch: DevSearch): Array<Dev> {
    let devs: Array<Dev> = this.getAllLastDevs();

    if (devSearch.especialidade && devs.length) {
      (devs = devs.filter((dev) => dev.especialidades.toString().toLowerCase().includes(devSearch.especialidade)));
    }
    if (devSearch.formacaoAcademica && devs.length) {
      (devs = devs.filter((dev) => dev.formacaoAcademica === (devSearch.formacaoAcademica as FormacaoAcademicaEnum)));
    }
    if (devSearch.estado && devs.length) {
      (devs = devs.filter((dev) => dev.estado.sigla === devSearch.estado));
    }
    if (devSearch.cidade && devs.length) {
      (devs = devs.filter((dev) => dev.cidade.id.toString() === devSearch.cidade));
    }

    return devs;
  }

  public update(dev: Dev): Dev {
    this.devs = new Array<Dev>();

    this.getAll().forEach((devItem) => {
      if (devItem.id === dev.id) {
        devItem = dev;
        this.dev = dev;
      }
      this.devs.push(devItem);
    });

    this.setStorage(this.devs);
    return this.dev;
  }

  public delete(id: number): void {
    this.setStorage(this.getAll().filter((dev) => dev.id !== id));
  }

  private getAll(): Array<Dev> {
    if (!this.storageService.getItem(DEV_CONFIG.storageKey)) {
      this.storageService.setItem(DEV_CONFIG.storageKey, JSON.stringify(new Array<Dev>()));
    }
    return JSON.parse(this.storageService.getItem(DEV_CONFIG.storageKey)) as Array<Dev>;
  }

  public getById(id: number): Dev {
    return this.getAll().filter((dev) => dev.id.toString() === id.toString())[0];
  }

  private getLast(): Dev {
    this.devs = this.getAll();
    return this.devs[this.devs.length - 1] || new Dev();
  }

  public getLastDevs(quantity?: number): Array<Dev> {
    let quantityReturn: number = DEV_CONFIG.itemsMaxList;
    if (quantity) {
      quantityReturn = quantity;
    }
    return this.getAll()
      .reverse()
      .filter((dev, index) => index <= quantityReturn - 1);
  }

  public getAllLastDevs(): Array<Dev> {
    return (JSON.parse(this.storageService.getItem(DEV_CONFIG.storageKey)) as Array<Dev>).reverse();
  }
}
