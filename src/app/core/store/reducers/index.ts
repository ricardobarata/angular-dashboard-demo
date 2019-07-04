import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import * as fromState from "../states/theme.state";
import * as fromReducer from "./theme.reducer";

export interface CoreState {
  themeFeature: fromState.ThemeState;
}

export const reducers: ActionReducerMap<CoreState> = {
  themeFeature: fromReducer.reducer
};

function logger(reducer: ActionReducer<CoreState>): ActionReducer<CoreState> {
  return function(state: CoreState, action: any): CoreState {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<CoreState>[] = !environment.production
  ? [logger]
  : [];
