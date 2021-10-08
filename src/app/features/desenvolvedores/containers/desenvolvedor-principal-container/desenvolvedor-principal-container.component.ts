import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DesenvolvedorListaContainerComponent } from '../desenvolvedor-lista-container/desenvolvedor-lista-container.component';
import { LazyComponentService } from '../../../../shared/services/lazy-component.service';

@Component({
    templateUrl: './desenvolvedor-principal-container.component.html'
})
export class DesenvolvedorPrincipalContainerComponent implements OnInit {
    @ViewChild('containerListaDesenvolvedores', { read: ViewContainerRef }) containerListaDesenvolvedores: ViewContainerRef;

    constructor(private lazyComponentService: LazyComponentService) {}

    ngOnInit() {
        Promise.resolve(null).then(() => this.lazyDesenvolvedorLista());
    }

    lazyDesenvolvedorLista() {
        const { instance } = this.lazyComponentService.carregaComponente(DesenvolvedorListaContainerComponent, this.containerListaDesenvolvedores);
        instance.buscarTodosDesenvolvedor();
    }

    lazyEncontraDesenvolvedor(filtro: string) {
        const { instance } = this.lazyComponentService.carregaComponente(DesenvolvedorListaContainerComponent, this.containerListaDesenvolvedores);
        instance.buscarTodosDesenvolvedorComFiltro(filtro);

    }
}
