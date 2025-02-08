import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Timestamp {
  timestamp: number;
}
type OwInfo =
  | overwolf.games.events.InfoUpdates2Event
  | overwolf.games.InstalledGameInfo;
type OwEvent = overwolf.games.events.NewGameEvents;
type InfoPayload = PayloadAction<Timestamp & OwInfo>;
type EventPayload = PayloadAction<Timestamp & OwEvent>;

interface BackgroundState {
  events: overwolf.games.events.GameEvent[];
  infos: Array<Timestamp & OwInfo>;

  kills: number;
  deaths: number;
  assists: number;
  gameTime: number;
}

const initialState: BackgroundState = {
  events: [],
  infos: [],

  kills: 0,
  deaths: 0,
  assists: 0,
  gameTime: 0,
};

const backgroundSlice = createSlice({
  name: "backgroundScreen",
  initialState,
  reducers: {
    setEvent(state, action: EventPayload) {
      if (action.payload.events[0].name === "kill") {
        state.kills += 1;
      } else if (action.payload.events[0].name === "death") {
        state.deaths += 1;
      } else if (action.payload.events[0].name === "assist") {
        state.assists += 1;
      } else if (action.payload.events[0].name === "match_clock") {
        state.gameTime = parseInt(action.payload.events[0].data);
      } else {
        state.events.push(...action.payload.events);
      }
    },
    setInfo(state, action: InfoPayload) {
      state.infos.push(action.payload);
    },
  },
});

export const { setEvent, setInfo } = backgroundSlice.actions;

export default backgroundSlice.reducer;
