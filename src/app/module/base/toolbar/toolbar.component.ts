import { BaseService } from './../base/base.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user: any;
  constructor(private baseService: BaseService, private router: Router) { }

  ngOnInit(): void {
    this.baseService.updateUser.subscribe(response => {
      this.user = response;
    });
    this.user = this.baseService.getUser();
  }

  logout(){
    this.baseService.setUser(null);
    this.router.navigate(['/login']);
  }
}
