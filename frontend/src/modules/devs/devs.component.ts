import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { deleteDev, openEditDev } from '../../ngrx'

export interface UserData {
  id: number;
  avatar: string;
  name: string;
  city: string;
  techs: string;
  gitHubUrl: string;
}

let ELEMENTS: UserData[] = []

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.sass']
})
export class DevsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'avatar', 'name', 'city', 'techs', 'gitHubUrl', 'delete', 'edit'];
  dataSource: MatTableDataSource<UserData>;

  public reducer$: Observable<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private store: Store<{ reducer: string }>) { }

  ngOnInit() {
    this.reducer$ = this.store.pipe(select('reducer'))
  }

  ngAfterViewInit() {
    this.reducer$.subscribe(state => {
      ELEMENTS = state.userList
      this.dataSource = new MatTableDataSource(ELEMENTS);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    this.reducer$.subscribe(state => {
      if (state.filterValue !== undefined) {
        this.dataSource.filter = state.filterValue.trim().toLowerCase()
      }
    })
  }

  applyFilter() {
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openPage(url: string) {
    window.open(url, '_blank')
  }

  deleteDev(id: number) {
    this.store.dispatch(deleteDev({ payload: id }))
  }

  openEdit() {
    this.store.dispatch(openEditDev({ payload: true }))
  }
}