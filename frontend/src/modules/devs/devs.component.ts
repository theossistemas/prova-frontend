import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { deleteDev, openEditDev, setDevToEdit } from '../../ngrx'

export interface UserData {
  id: number;
  avatar: string;
  name: string;
  city: string;
  techs: string;
  gitHubUsername: string;
}

const BASE_URL = `https://github.com/`

let ELEMENTS: UserData[] = []

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.sass']
})
export class DevsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'avatar', 'name', 'city', 'techs', 'gitHubUsername', 'delete', 'edit'];
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

  openGitHubUserPage(url: string) {
    window.open(`${BASE_URL}/${url}`, '_blank')
  }

  deleteDev(id: number) {
    this.store.dispatch(deleteDev({ payload: id }))
  }

  openEdit(id: number) {
    this.store.dispatch(setDevToEdit({ payload: id }))
    this.store.dispatch(openEditDev({ payload: true }))
  }
}