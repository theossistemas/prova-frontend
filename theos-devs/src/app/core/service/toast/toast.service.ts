import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastService {
  constructor(private toastrService: ToastrService) {}

  public success(message?: string, title?: string): void {
    this.toastrService.success(message, title);
  }

  public error(message?: string, title?: string): void {
    this.toastrService.error(message, title);
  }

  public info(message?: string, title?: string): void {
    this.toastrService.info(message, title);
  }

  public warning(message?: string, title?: string): void {
    this.toastrService.warning(message, title);
  }
}
