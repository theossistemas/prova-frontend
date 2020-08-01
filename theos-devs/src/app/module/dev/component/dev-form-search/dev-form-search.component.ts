import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationEnd, NavigationExtras, Router } from '@angular/router';
import { faSearch, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { IbgeService } from '../../../../core/service/ibge/ibge.service';
import { InputSelect } from '../../../../shared/interface/input-select.interface';
import { IbgeMunicipio } from '../../../../shared/model/ibge/ibge-municipio';
import { IbgeUF } from '../../../../shared/model/ibge/ibge-uf';
import { FormacaoAcademicaType } from '../../../../shared/type/formacao-academica.type';
import { StringUtil } from '../../../../shared/util/string-util';
import { DEV_CONFIG } from '../../dev.config';
import { Dev } from '../../model/dev';
import { DevSearch } from '../../model/dev-search';

@Component({
  selector: 'app-dev-form-search',
  templateUrl: './dev-form-search.component.html',
  styleUrls: ['./dev-form-search.component.scss']
})
export class DevFormSearchComponent implements OnInit, AfterViewInit, OnDestroy {
  public faSearch: IconDefinition = faSearch;
  public faTimes: IconDefinition = faTimes;

  public devSearch: DevSearch;

  public devFormSearch: FormGroup;

  public showFormSearch: boolean = false;

  public devs: Array<Dev>;

  public formacoesAcademicas: Array<InputSelect>;

  public estados: Array<IbgeUF>;

  public municipios: Array<IbgeMunicipio>;

  private subs: Array<Subscription> = new Array<Subscription>();

  constructor(private ibgeService: IbgeService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
    this.initSubs();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.getFormacoesAcademicas();
    }, 200);
    this.getEstados();
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe);
  }

  private initSubs(): void {
    this.subs.push(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.showFormSearch = false;
        }
      }),
      this.devFormSearch.get('estado').valueChanges.subscribe((value) => {
        if (value) {
          this.devFormSearch.get('cidade').disable();
          this.getMunicipiosPorEstado(value);
        }
      })
    );
  }

  private createForm(): void {
    this.devFormSearch = DevSearch.createForm(this.formBuilder);
  }

  public showFormSearchBtn(): void {
    this.showFormSearch = !this.showFormSearch;
  }

  public reset(): void {
    this.createForm();
    this.getFormacoesAcademicas();
    this.getEstados();
  }

  private getFormacoesAcademicas(): void {
    this.formacoesAcademicas = new Array<InputSelect>();

    FormacaoAcademicaType.getKeys().forEach((value) => {
      this.formacoesAcademicas.push({
        label: FormacaoAcademicaType.getLabel(value),
        value: value
      });
    });

    this.formacoesAcademicas.length
      ? this.devFormSearch.get('formacaoAcademica').enable()
      : this.devFormSearch.get('formacaoAcademica').disable();
  }

  private getEstados(): void {
    this.ibgeService
      .getEstados()
      .pipe(take(1))
      .subscribe(
        (estados) => {
          this.devFormSearch.get('estado').enable();
          this.estados = StringUtil.alphabeticalOrder(estados) as Array<IbgeUF>;
        },
        (error) => {
          this.devFormSearch.get('estado').disable();
          alert('Não foi possível obter a lista de estados.');
        }
      );
  }

  public getMunicipiosPorEstado(uf: string): void {
    this.ibgeService
      .getMunicipiosByEstado(uf)
      .pipe(take(1))
      .subscribe((municipios) => {
        this.municipios = municipios;
        this.devFormSearch.get('cidade').enable();
      });
  }

  public onSubmit(): void {
    this.devSearch = this.devFormSearch.value;

    const params: NavigationExtras = {
      queryParams: {
        especialidade: this.devSearch.especialidade,
        formacaoAcademica: this.devSearch.formacaoAcademica,
        estado: this.devSearch.estado,
        cidade: this.devSearch.cidade
      }
    };

    this.router.navigate([`${DEV_CONFIG.pathFront}/list`], params);
  }

  public isFormInvalid(): boolean {
    return (
      this.devFormSearch.get('especialidade').value === '' &&
      this.devFormSearch.get('formacaoAcademica').value === '' &&
      this.devFormSearch.get('estado').value === '' &&
      this.devFormSearch.get('cidade').value === ''
    );
  }
}
