import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { camposFormularioCadastroDesenvolvedor } from './camposFormularioCadastroDesenvolvedor';
import { Desenvolvedor } from '../../models/desenvolvedor';
import { DesenvolvedorService } from '../../services/desenvolvedor.service';

@Component({
    selector: 'app-desenvolvedor-cadastro-formulario',
    templateUrl: './desenvolvedor-cadastro-formulario.component.html',
    styles: [`
        .breakline {
            opacity: 30%;
            margin: 20px 0px;
        }
        .btn-success {
            width: 100%;
            background-color: #1bc47d;
            color: white;
        }
    `]
})
export class DesenvolvedorCadastroFormulario implements OnInit {
    formulario: FormGroup;
    isPeloGithub: boolean = false;

    @Input() desenvolvedor: Desenvolvedor;

    @Output() salvar = new EventEmitter();
    @Output() deletar = new EventEmitter();

    constructor(private formBuilder: FormBuilder,
                private desenvolvedorService: DesenvolvedorService) { }

    get formularioValido() {
        return this.formulario.valid;
    }

    ngOnInit() {
        this.configurarFormulario();
        if (this.desenvolvedor) {
            this.formulario.patchValue(this.desenvolvedor);
        }
    }

    aoSalvar() {
        this.salvar.emit(this.formulario.value);
        this.formulario.reset();
        this.fecharOpcaoPeloGit();
    }

    aoDeletar() {
        this.deletar.emit(this.formulario.value);
    }

    obterControleDoCampo(campo: string): FormControl {
        return this.formulario.controls[campo] as FormControl;
    }

    cadastrarPeloGithub() {
        this.isPeloGithub = true;
    }

    fecharOpcaoPeloGit() {
        this.isPeloGithub = false;
    }

    preencherCamposComDadosDoGithub() {
        this.desenvolvedorService.buscarDadosDoGithub(this.formulario.get('github').value).subscribe((dados: any) => {
            this.formulario.patchValue({
                nome: dados.name,
                avatar: dados.avatar_url,
                email: dados.email
            })
        });
    }

    private configurarFormulario() {
        this.formulario = camposFormularioCadastroDesenvolvedor(this.formBuilder);
    }
}
