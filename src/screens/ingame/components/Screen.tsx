import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { RootReducer } from "app/store/rootReducer";
import { AssistIcon, DeathIcon, KillIcon } from "assets/icons";
import { InGame } from "../utils/connection";

import "./styles/screen.scss";
import "./styles/scrollbar.css";

const Screen = () => {
  const { kills, deaths, assists, gameTime, events } = useSelector(
    (state: RootReducer) => state.background
  );

  const [lastKDA, setLastKDA] = useState({ kills, deaths, assists });
  const [showLastEvents, setShowLastEvents] = useState(false);
  const lastEventsEl = useRef<HTMLUListElement>(null);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const toggleShowLastDetails = () => {
    setShowLastEvents(!showLastEvents);
  };

  // run handler/api
  useEffect(() => {
    InGame.instance().run();
  }, []);

  // Обновляем lastKDA при изменении
  useEffect(() => {
    setTimeout(() => setLastKDA({ kills, deaths, assists }), 300); // Через 300 мс снимаем анимацию
  }, [kills, deaths, assists]);

  // keep scrolled to last
  useEffect(() => {
    if (!lastEventsEl.current) return;

    lastEventsEl.current.scrollTop = lastEventsEl.current.scrollHeight;
  }, [events]);

  return (
    <div className="ingame--container">
      <h4>KDA (kill/death/assist):</h4>
      <div className="ingame--kda">
        <div className="ingame--kda__kill">
          <KillIcon animate={kills > lastKDA.kills} /> {kills}
        </div>
        <div className="ingame--kda__death">
          <DeathIcon animate={deaths > lastKDA.deaths} /> {deaths}
        </div>
        <div className="ingame--kda__assist">
          <AssistIcon animate={assists > lastKDA.assists} /> {assists}
        </div>
      </div>

      <h4>⏳ Время игры: {formatTime(gameTime)}</h4>

      <button className="ingame--btn" onClick={toggleShowLastDetails}>
        Вкл/выкл показ событий
      </button>

      <h4>Последние события:</h4>
      {events.length === 0 ? (
        <p>Ожидание событий...</p>
      ) : !showLastEvents ? (
        <p>Включите показ последних событий</p>
      ) : (
        <ul ref={lastEventsEl} className="ingame--last-events">
          {/* last 100 events */}
          {events.slice(-100).map((event, index) => (
            <li key={index}>
              <strong>{event.name}:</strong>
              <pre>{event.data}</pre>
              {/* {JSON.stringify(event.data)} */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Screen;
