import { createFeatureSelector } from '@ngrx/store'

import { tokenTableFeature } from './token-table.reducers'
import { TokenTableState } from './token-table.state'

export const selectTokenTableFeature = createFeatureSelector<TokenTableState>(tokenTableFeature.name)
