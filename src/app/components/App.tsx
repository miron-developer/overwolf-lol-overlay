import { useEffect, useState, Suspense } from "react";

import { CurrentScreen } from "./CurrentScreen";

import "./root.css";

async function getCurrentWindow() {
  return new Promise<string>((resolve, reject) => {
    overwolf.windows.getCurrentWindow((result) => {
      if (result.success) {
        resolve(result.window.name);
      } else {
        reject(result.error);
      }
    });
  });
}

export const App = () => {
  const [screenName, setScreenName] = useState<string>("");

  useEffect(() => {
    (async function preLoad() {
      const currentWindow = await getCurrentWindow();
      setScreenName(currentWindow);
    })();
  }, []);

  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <CurrentScreen name={screenName} />
    </Suspense>
  );
};
