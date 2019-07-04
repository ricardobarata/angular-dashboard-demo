import { LayoutActions } from "../actions/layout.actions";
import { initialThemeState, LayoutState } from "../states/layout.state";

export function reducer(
  state = initialThemeState,
  action: LayoutActions
): LayoutState {
  switch (action.type) {
    default:
      return state;
  }
}
