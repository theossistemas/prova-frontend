import { FormacaoAcademicaEnum } from '../enum/formacao-academica.enum';

export class FormacaoAcademicaType {
  static getKeys(): Array<string> {
    return Object.keys(FormacaoAcademicaEnum);
  }

  static getLabel(value: string): string {
    return FormacaoAcademicaEnum[value];
  }
}
