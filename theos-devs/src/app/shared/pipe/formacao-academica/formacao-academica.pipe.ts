import { Pipe, PipeTransform } from '@angular/core';
import { FormacaoAcademicaType } from '../../type/formacao-academica.type';

@Pipe({
  name: 'formacaoAcademica'
})
export class FormacaoAcademicaPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return FormacaoAcademicaType.getLabel(value as string);
  }
}
