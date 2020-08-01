import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { ServiceModule } from './service/service.module';

@NgModule({
  imports: [HttpClientModule, ServiceModule, NgxSpinnerModule, BrowserAnimationsModule, ToastrModule.forRoot()],
  exports: [ServiceModule, NgxSpinnerModule, BrowserAnimationsModule, ToastrModule]
})
export class CoreModule {}
