import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DevInfo } from './../../entities/dev-info';
import { DevService } from './../../services/dev.service';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as DevListActions from './../../actions/dev-list.actions';
import { DevInfoState } from './../../reducers/dev-list.reducer';
import * as fromSelector from './../../selectors/dev-list.selectors';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevListComponent implements OnInit {
  devList$: Observable<DevInfo[]>;

  constructor(
    private store: Store<DevInfoState>,
    private devService: DevService,
    private ngxSpinnerService: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    // this.ngxSpinnerService.show();
    this.store.dispatch(DevListActions.requestLoadDevs());
    this.devList$ = this.store.select(fromSelector.devList);

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
