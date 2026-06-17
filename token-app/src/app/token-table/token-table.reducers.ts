import { combineReducers, createFeature } from '@ngrx/store'

import { TokenTableState } from './token-table.state'

export const tokenTableFeature = createFeature({
  name: 'tokenTable',
  reducer: combineReducers<TokenTableState>({})
})
