import { enthusiasm } from "./index";
import {
  incrementEnthusiasm,
  decrementEnthusiasm,
  ignoreAction
} from "../actions";
import { StoreState } from "../types";

it("enthusiasm reducer updates state upon action incrementEnthusiasm", () => {
  const state: StoreState = { languageName: "TS", enthusiasmLevel: 1 };
  const newState = enthusiasm(state, incrementEnthusiasm());
  expect(newState).toEqual({ languageName: "TS", enthusiasmLevel: 2 });
});

it("enthusiasm reducer updates state upon action decrementEnthusiasm", () => {
  const state: StoreState = { languageName: "TS", enthusiasmLevel: 2 };
  const newState = enthusiasm(state, decrementEnthusiasm());
  expect(newState).toEqual({ languageName: "TS", enthusiasmLevel: 1 });
});

it("enthusiasm reducer updates state upon action decrementEnthusiasm, \
with enthusiasmLevel no less than 1", () => {
  const state: StoreState = { languageName: "TS", enthusiasmLevel: 1 };
  const newState = enthusiasm(state, decrementEnthusiasm());
  expect(newState).toEqual({ languageName: "TS", enthusiasmLevel: 1 });
});

it("enthusiasm reducer keeps old state upon actions other than inc/dec", () => {
  const state: StoreState = { languageName: "TS", enthusiasmLevel: 2 };
  const newState = enthusiasm(state, ignoreAction());
  expect(newState).toEqual({ languageName: "TS", enthusiasmLevel: 2 });
});
