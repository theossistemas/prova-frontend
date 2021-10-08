import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-campo-wrapper',
    templateUrl: './campo-wrapper.component.html',
    styles: [`
        .label-opcional {
            font-size: 90%;
            font-weight: 500;
        }
    `]
})
export class CampoWrapperComponent {
    @Input() label: string;
    @Input() forId: string;
    @Input() classesCss: string;
    @Input() control: AbstractControl;
    @Input() hideOpcional: boolean;

    isRequired(): boolean {
        if (!this.control?.validator) {
            return false;
        }
        const validator = this.control.validator({} as AbstractControl);
        return validator && validator.required;
    }
}
