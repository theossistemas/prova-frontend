import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadDevService } from '../../services/cad-dev.service';
import { FormCadComponent } from '../form-cad/form-cad.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  developers: any[] = [];
  filteredDevelopers: any[] = [];

  constructor(
    private developerService: CadDevService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadDevelopers();
  }

  loadDevelopers(): void {
    this.developerService.getDevelopers().subscribe((data) => {
      this.developers = data;
      this.filteredDevelopers = data;
    });
  }

  search(query: string): void {
    this.filteredDevelopers = this.developers.filter(dev =>
      dev.name.toLowerCase().includes(query.toLowerCase()) ||
      dev.city.toLowerCase().includes(query.toLowerCase()) ||
      dev.technologies.toLowerCase().includes(query.toLowerCase())
    );
  }

  onEdit(developer: any): void {
    const dialogRef = this.dialog.open(FormCadComponent, {
      width: '80%',
      data: developer
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.loadDevelopers();
      }
    });
  }

  onDelete(developer: any): void {
    if (confirm('Tem certeza que deseja excluir este desenvolvedor?')) {
      this.developerService.deleteDeveloper(developer.id).subscribe(() => {
        alert('Developer excluído com sucesso!');
        this.loadDevelopers();
      });
    }
  }

  addDeveloper(): void {
    const dialogRef = this.dialog.open(FormCadComponent, {
      width: '80%'
    });

    dialogRef.componentInstance.developerAdded.subscribe(() => {
      this.loadDevelopers();
    });
  }
}


