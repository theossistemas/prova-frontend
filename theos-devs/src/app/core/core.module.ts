import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { ServiceModule } from './service/service.module';

@NgModule({
  imports: [
    HttpClientModule,
    ServiceModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  exports: [ServiceModule, NgxSpinnerModule, BrowserAnimationsModule, ToastrModule, SweetAlert2Module]
})
export class CoreModule {}
