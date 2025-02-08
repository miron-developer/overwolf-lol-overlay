import { useEffect } from "react";

import { BackgroundController } from "../utils/connection";

const BackgroundWindow = () => {
  useEffect(() => {
    BackgroundController.instance().run();
  }, []);

  return null;
};

export default BackgroundWindow;
