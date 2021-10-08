import { EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, FormGroupDirective } from '@angular/forms';

export function CUSTOM_CONTROL_CONTAINER_FACTORY(formGroup: FormGroupDirective) {
    return (formGroup.form == null) ? null : formGroup;
}

export const CUSTOM_CONTROL_CONTAINER: any = {
    provide: ControlContainer,
    useFactory: CUSTOM_CONTROL_CONTAINER_FACTORY,
    deps: [FormGroupDirective],
};

export class CampoValueAccessor implements ControlValueAccessor {
    @Input() label: string;
    @Input() id: string;
    @Input() classesCss: string;
    @Input() control: AbstractControl = new FormControl();
    @Input() formControlName: string;
    @Input() helper: string;
    @Input() type = 'text';
    @Input() placeholder: string = '';

    @Output() aoMudar = new EventEmitter(false);

    _valorDoCampo: any;
    _valorAntigoDoCampo: any;

    get valorDoCampo() {
        return this._valorDoCampo;
    }

    set valorDoCampo(valor: any) {
        if (valor !== this._valorDoCampo) {
            if (!this._valorAntigoDoCampo) {
                this._valorAntigoDoCampo = valor;
            }

            this._valorDoCampo = valor;
            this.registerOnChange(this._valorDoCampo);
        }
    }

    onChangeCb: (_: any) => void = () => {};
    onTouchedCb: (_: any) => void = () => {};

    writeValue(valor: any): void {
        this.valorDoCampo = valor;
    }

    registerOnChange(fn: any): void {
        if ('function' === typeof fn) {
            this.onChangeCb = fn;
        } else {
            this.onChangeCb(fn);
            this.aoMudar.emit(fn);
        }
    }

    registerOnTouched(fn: any): void {
        if ('function' === typeof fn) {
            this.onTouchedCb = fn;
        } else {
            this.onTouchedCb(fn);
        }
    }
}
