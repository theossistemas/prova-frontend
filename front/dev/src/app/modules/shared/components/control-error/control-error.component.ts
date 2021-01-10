import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

const errors = {
  required: 'Por favor, informe esse campo.',
  email: 'Por favor, informe o e-mail no formato: seunome@exemplo.com.',
  cpf: 'Por favor, informe um CPF válido.',
  cnpj: 'Por favor, informe um CNPJ válido.',
  pattern: 'Por favor, informe esse campo no formato correto.',
  mask: 'Por favor, informe esse campo no formato correto.',
  min: (min: number) => `Por favor, informe um valor de no mínimo ${min}.`,
  max: (max: number) => `Por favor, informe um valor de no máximo ${max}.`,
  minlength: (requiredLength: number) => `Por favor, informe no mínimo ${requiredLength} caracteres.`,
  maxlength: (requiredLength: number) => `Por favor, informe no máximo ${requiredLength} caracteres.`,
};

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.styl']
})
export class ControlErrorComponent {

  @Input()
  control: FormControl;

  get errorMessage(): string {
    if (this.control.touched || this.control.dirty) {
      for (const key in this.control.errors) {
        if (key) {
          switch (key) {
            case 'min':
              return errors[key](this.control.errors.min.min);
            case 'max':
              return errors[key](this.control.errors.max.max);
            case 'minlength':
              return errors[key](this.control.errors.minlength.requiredLength);
            case 'maxlength':
              return errors[key](this.control.errors.maxlength.requiredLength);
            default:
              return errors[key];
          }
        }
      }
    }
    return '';
  }

}
