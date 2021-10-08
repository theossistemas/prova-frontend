import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Desenvolvedor } from '../../models/desenvolvedor';
import { SwalService } from '../../../../shared/services/swal.service';
import { DesenvolvedorService } from '../../services/desenvolvedor.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-desenvolvedor-atualizar-container',
    templateUrl: './desenvolvedor-atualizar-container.component.html'
})
export class DesenvolvedorAtualizarContainerComponent implements OnInit {
    desenvolvedor: Desenvolvedor;

    @Output() aoCadastrarDesenvolvedor = new EventEmitter();

    constructor(private swalService: SwalService,
                private desenvolvedorService: DesenvolvedorService,
                private router: Router,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.carregarDesenvolvedorDaRota();
    }

    salvarFormulario(desenvolvedor: Desenvolvedor) {
        this.desenvolvedorService.salvar(desenvolvedor).subscribe(() => {
            this.swalService.sucesso('Desenvolvedor atualizado com sucesso').then(() => {
                this.voltarParaPaginaDesenvolvedores();
            });
        });
    }

    private carregarDesenvolvedorDaRota() {
        this.route.data.subscribe(({ desenvolvedor }) => (this.desenvolvedor = desenvolvedor));
    }

    private voltarParaPaginaDesenvolvedores() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

}
