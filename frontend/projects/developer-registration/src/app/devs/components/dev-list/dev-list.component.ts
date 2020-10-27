import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromActions from './../../store/dev-list.actions';
import * as fromReducer from './../../store/dev-list.reducer';
import * as fromSelector from './../../store/dev-list.selectors';
import { DevInfo } from './../../models/dev-info';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevListComponent implements OnInit {
  devList$: Observable<DevInfo[]>;

  constructor(
    private store: Store<fromReducer.DevInfoState>,
    // private devService: DevService,
    // private ngxSpinnerService: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.requestLoadDevs());
    this.devList$ = this.store.select(fromSelector.devList);

    // this.ngxSpinnerService.show();
    // this.devService.getAll().subscribe(
    //   result => {
    //     this.ngxSpinnerService.hide();
    //     this.devList.push(...result);
    //   },
    //   err => {
    //     this.ngxSpinnerService.hide();
    //     console.error(err);
    //   }
    // );
  }

}
