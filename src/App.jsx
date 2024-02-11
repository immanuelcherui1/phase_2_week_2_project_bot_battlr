import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const handleToggleEnlist = (clickedBot) => {
    if (yourBotArmy.some(bot => bot.id === clickedBot.id)) {
      setYourBotArmy(prevState => prevState.filter(bot => bot.id !== clickedBot.id));
    } else {
      setYourBotArmy(prevState => [...prevState, clickedBot]);
    }
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} handleToggleEnlist={handleToggleEnlist} />
      <YourBotArmy yourBotArmy={yourBotArmy} handleToggleEnlist={handleToggleEnlist} />
    </div>
  );
};

export default App;
