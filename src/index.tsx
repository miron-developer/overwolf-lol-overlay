import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "app/components/App";
import store from "app/store/store";

import reportWebVitals from "./reportWebVitals";

const OverwolfApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<OverwolfApp />);

reportWebVitals();
