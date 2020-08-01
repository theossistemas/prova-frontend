import { NgModule } from '@angular/core';
import { FormacaoAcademicaPipe } from './formacao-academica/formacao-academica.pipe';

@NgModule({
  declarations: [FormacaoAcademicaPipe],
  exports: [FormacaoAcademicaPipe]
})
export class PipeModule {}
