import { Component, inject } from '@angular/core'
import { Store } from '@ngrx/store'
import { TranslateService } from '@ngx-translate/core'
import { Observable } from 'rxjs'

import { AuthProxyService } from '@onecx/angular-auth'
import { ColumnType, DataTableColumn, Row } from '@onecx/angular-accelerator'

import { selectTableViewModel } from './table.selectors'
import { TableViewModel } from './table.viewmodel'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: false
})
export class TableComponent {
  viewModel$: Observable<TableViewModel>

  translateService = inject(TranslateService)
  authService = inject(AuthProxyService);
  
  headerValues = this.authService.getHeaderValues();

  tableColumns: DataTableColumn[] = [
    {id: "key", columnType: ColumnType.STRING, nameKey: "TABLE_COLUMNS.KEY", sortable: false},
    {id:"token", columnType: ColumnType.STRING, nameKey: "TABLE_COLUMNS.TOKEN", sortable: false}
  ]
  tableRows: Row[] = this.formatHeaderValuesForTable(this.headerValues);

  constructor(private readonly store: Store) {
    this.viewModel$ = this.store.select(selectTableViewModel);
  }

  formatHeaderValuesForTable(headerValues: Record<string, string>): Row[] {
    const result: Row[] = [];
    Object.entries(headerValues).forEach(([key, value]) => {
      result.push({
        id: key,
        key,
        token: value
      })
    })
    return result;
  }

  formatData(data: unknown): string {
    return JSON.stringify(data);
  }
}
