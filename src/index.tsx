import * as React from "react";
import * as ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { enthusiasm } from "./reducers/index";
import { StoreState } from "./types/index";
import Hello from "./containers/Hello";
import { EnthusiasmAction } from "./actions";

const store = createStore<StoreState, EnthusiasmAction, null, null>(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: "TypeScript"
  }
);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
