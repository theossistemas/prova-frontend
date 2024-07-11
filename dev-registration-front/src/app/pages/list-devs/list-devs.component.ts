import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

export interface Devs {
  githubUsername: string;
  avatarUrl: string;
  name: string;
  email: string;
  location: string;
  education: string;
  technologies: string;
  htmlUrl: string;
}

@Component({
  selector: 'app-list-devs',
  templateUrl: './list-devs.component.html',
  styleUrls: ['./list-devs.component.css']
})

export class ListDevsComponent implements OnInit {
  devs!: Devs[];
  filteredDevs: Devs[] = [];
  notFund : boolean = false;

  constructor(private _service: ServicesService) { }

  ngOnInit() {
    this._service.getDevs().subscribe((response) => {
      if (response) {
        if (response.length === 0) {
          this.notFund = true;
        }
        this.devs = response;
        this.filteredDevs = this.devs;
      }
    });
  }

  search(event: any) {
    const filterValue = event.target.value.trim().toLowerCase();
    this.filteredDevs = this.devs.filter(dev =>
      dev.name.toLowerCase().includes(filterValue) ||
      dev.technologies.toLowerCase().includes(filterValue) ||
      dev.location.toLowerCase().includes(filterValue)
    );
  
    if (this.filteredDevs.length === 0) {
      this.notFund = true;
    } else {
      this.notFund = false;
    }
  }
}
