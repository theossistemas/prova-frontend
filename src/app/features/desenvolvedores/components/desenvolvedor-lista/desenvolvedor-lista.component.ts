import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Desenvolvedor } from '../../models/desenvolvedor';

@Component({
    selector: 'app-desenvolvedor-lista',
    templateUrl: './desenvolvedor-lista.component.html',
    styles: [`
        .btn-github {
            text-decoration: none;
            color: white;
        }

        .btn-github:hover {
            text-decoration: underline;
            color: #a5a3a3;
        }
    `]
})
export class DesenvolvedorListaComponent {

    @Input() desenvolvedores: Desenvolvedor[];
    @Input() set filtroFormacao(desenvolvedor: Desenvolvedor[]) { this.validaFiltroDePesquisa(desenvolvedor); }
    @Input() set filtroNome(desenvolvedor: Desenvolvedor[]) { this.validaFiltroDePesquisa(desenvolvedor); }
    @Input() set filtroTecnologia(desenvolvedor: Desenvolvedor[]) { this.validaFiltroDePesquisa(desenvolvedor); }

    @Output() deletar = new EventEmitter();
    @Output() editar = new EventEmitter();

    aoDeletar(desenvolvedor: Desenvolvedor) {
        this.deletar.emit(desenvolvedor);
    }

    aoEditar(desenvolvedor: Desenvolvedor) {
        this.editar.emit(desenvolvedor);
    }

    private validaFiltroDePesquisa(desenvolvedor: Desenvolvedor[]) {
        if(desenvolvedor && desenvolvedor.length > 0)
            this.desenvolvedores = desenvolvedor;
    }
}
