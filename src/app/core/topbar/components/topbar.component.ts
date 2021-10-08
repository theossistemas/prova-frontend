import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styles: [`
        .espaco {
            flex: 1 1 auto;
        }
    `]
})
export class TopbarComponent {
    formulario: FormGroup;

    @Input() isEditando: boolean = false;

    @Output() aoLocalizarDesenvolvedor = new EventEmitter<string>()

    constructor(private formBuilder: FormBuilder) {
        this.formulario = this.formBuilder.group({
            busca: [null]
        })
    }

    aoLocalizar() {
        this.aoLocalizarDesenvolvedor.emit(this.formulario.value.busca);
    }
}

@NgModule({
    declarations: [
        TopbarComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        TopbarComponent
    ]
})
export class TopbarModule {
}
