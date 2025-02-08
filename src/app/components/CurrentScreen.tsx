import { lazy, memo } from "react";

//same name in the public/app/manifest.json  "windows"
const WINDOW_NAMES = {
  BACKGROUND: "background",
  INGAME: "in_game",
};

//lazy load window components, so that they are not loaded until they are needed
//this is done to reduce the amount of time spent loading
const BackgroundScreen = lazy(() => import("screens/background"));
const InGameScreen = lazy(() => import("screens/ingame"));

type CurrentScreenProps = {
  name: string;
};

//return the current page based on the window name, the current window name is passed in as a prop
//this is used to determine which page to render
export const CurrentScreen = memo(({ name }: CurrentScreenProps) => {
  switch (name) {
    case WINDOW_NAMES.BACKGROUND:
      return <BackgroundScreen />;
    case WINDOW_NAMES.INGAME:
      return <InGameScreen />;
    default:
      return null;
  }
});
