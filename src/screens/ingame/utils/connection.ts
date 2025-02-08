import { OWGames, OWGamesEvents } from "@overwolf/overwolf-api-ts";

import { kGamesFeatures } from "lib/consts";
import { setInfo, setEvent } from "screens/background/stores/background";
import store from "app/store/store";

export class InGame {
  private static _instance: InGame;
  private _gameEventsListener: OWGamesEvents = new OWGamesEvents(
    {
      onInfoUpdates: this.onInfoUpdates.bind(this),
      onNewEvents: this.onNewEvents.bind(this),
    },
    []
  );

  private constructor() {}

  public static instance() {
    if (!this._instance) {
      this._instance = new InGame();
    }

    return this._instance;
  }

  public async run() {
    const gameClassId = (await this.getCurrentGameClassId()) || 5428;

    const gameFeatures = kGamesFeatures.get(gameClassId);

    if (gameFeatures && gameFeatures.length) {
      this._gameEventsListener = new OWGamesEvents(
        {
          onInfoUpdates: this.onInfoUpdates.bind(this),
          onNewEvents: this.onNewEvents.bind(this),
        },
        gameFeatures
      );

      this._gameEventsListener.start();
    }
  }

  private onInfoUpdates(info: any) {
    store.dispatch(
      setInfo({
        ...info,
        timestamp: Date.now(),
      })
    );
  }

  private onNewEvents(e: any) {
    store.dispatch(
      setEvent({
        ...e,
        timestamp: Date.now(),
      })
    );
  }

  private async getCurrentGameClassId(): Promise<number | null> {
    const info = await OWGames.getRunningGameInfo();

    return info && info.isRunning && info.classId ? info.classId : null;
  }
}
