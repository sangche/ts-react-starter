import * as constants from "../constants";

// interfaces for each action
export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM; // string literal type, actually.
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}
// for testing
interface Ignore {
  type: number;
}
// action total type
export type EnthusiasmAction =
  | IncrementEnthusiasm
  | DecrementEnthusiasm
  | Ignore;

// action generating functions
export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  };
  // return object that matches interface type
}
/**
 * return { type: "INCREMENT_ENTHUSIASM" as constants.INCREMENT_ENTHUSIASM }
 */

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  };
}

// add for testing
export function ignoreAction(): Ignore {
  return { type: 100 };
}
