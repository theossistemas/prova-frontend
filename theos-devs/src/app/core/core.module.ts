import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServiceModule } from './service/service.module';

@NgModule({
  imports: [ServiceModule, HttpClientModule],
  exports: [ServiceModule]
})
export class CoreModule {}
