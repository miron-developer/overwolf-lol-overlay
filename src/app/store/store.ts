import { configureStore } from "@reduxjs/toolkit";

import reducer from "./rootReducer";

const reduxStore = configureStore({
  reducer,
  devTools: true,
  enhancers: (getDefaultEnchancers) => getDefaultEnchancers(),
});

declare global {
  interface Window {
    reduxStore: typeof reduxStore;
  }
}

window.reduxStore = reduxStore;

const { reduxStore: store } = overwolf.windows.getMainWindow();

export type AppDispatch = typeof store.dispatch;
export default store;
