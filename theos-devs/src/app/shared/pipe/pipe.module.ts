import { NgModule } from '@angular/core';
import { EspecialidadePipe } from './especialidade/especialidade.pipe';
import { FormacaoAcademicaPipe } from './formacao-academica/formacao-academica.pipe';

@NgModule({
  declarations: [FormacaoAcademicaPipe, EspecialidadePipe],
  exports: [FormacaoAcademicaPipe, EspecialidadePipe]
})
export class PipeModule {}
