import { Component } from '@angular/core';
import { Desenvolvedor } from '../../models/desenvolvedor';
import { DesenvolvedorService } from '../../services/desenvolvedor.service';
import { Observable } from 'rxjs';
import { SwalService } from '../../../../shared/services/swal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './desenvolvedor-lista-container.component.html'
})
export class DesenvolvedorListaContainerComponent {
    desenvolvedores$: Observable<Desenvolvedor[]>;
    respostaFormacao: any;
    respostaNome: any;
    respostaTecnologia: any;

    constructor(private desenvolvedorService: DesenvolvedorService,
                private swalService: SwalService,
                private router: Router,
                private route: ActivatedRoute,
    ) {}

    buscarTodosDesenvolvedor() {
        this.desenvolvedores$ = this.desenvolvedorService.buscarTodos();
    }

    buscarTodosDesenvolvedorComFiltro(filtro: string) {
        if (filtro === null || filtro === '') {
            this.buscarTodosDesenvolvedor();
            return;
        }
        this.desenvolvedorService.buscarTodosComFiltro(filtro).subscribe(responseList => {
            this.respostaFormacao = responseList[0];
            this.respostaNome = responseList[1];
            this.respostaTecnologia = responseList[2];
        });
    }

    aoDeletar(desenvolvedor: Desenvolvedor) {
        this.swalService.deletarComConfirmacao(() => {
            this.deletarDesenvolvedor(desenvolvedor);
        });
    }

    aoEditar(desenvolvedor: Desenvolvedor) {
        this.router.navigate(['/desenvolvedores', desenvolvedor.id], {relativeTo: this.route});
    }

    private deletarDesenvolvedor(desenvolvedor: Desenvolvedor) {
        this.desenvolvedorService.deletar(desenvolvedor.id).subscribe(() => {
            this.swalService.sucesso('Desenvolvedor removido com sucesso').then(() => {
                this.buscarTodosDesenvolvedor();
            });
        })
    }
}
