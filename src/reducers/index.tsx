import { EnthusiasmAction } from "../actions";
import { StoreState } from "../types/index";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../constants/index";

export function enthusiasm(
  state: StoreState,
  action: EnthusiasmAction
): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
  }
  return state; // return old state for all other cases
}

/**
 * Since reducers are pure functions, they can be passed arbitrary data.
 * For every input, reducers can be tested by checking their newly produced state.
 * Consider looking into Jest's toEqual method to accomplish this.
 */
