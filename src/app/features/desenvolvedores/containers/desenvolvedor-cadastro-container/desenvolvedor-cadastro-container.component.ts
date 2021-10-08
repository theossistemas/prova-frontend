import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Desenvolvedor } from '../../models/desenvolvedor';
import { SwalService } from '../../../../shared/services/swal.service';
import { DesenvolvedorService } from '../../services/desenvolvedor.service';


@Component({
    selector: 'app-desenvolvedor-cadastro-container',
    templateUrl: './desenvolvedor-cadastro-container.component.html'
})
export class DesenvolvedorCadastroContainerComponent implements OnInit {

    @Output() aoCadastrarDesenvolvedor = new EventEmitter();

    constructor(private swalService: SwalService,
                private desenvolvedorService: DesenvolvedorService) {}

    ngOnInit() {}

    salvarFormulario(desenvolvedor: Desenvolvedor) {
        this.desenvolvedorService.salvar(desenvolvedor).subscribe(() => {
            this.swalService.sucesso('Desenvolvedor cadastrado com sucesso').then(() => {
                this.aoCadastrarDesenvolvedor.emit();
            });
        });
    }

}
