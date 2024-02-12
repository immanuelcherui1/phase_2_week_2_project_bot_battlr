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

  const handleDischarge = (botId) => {
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        setBots(prevBots => prevBots.filter(bot => bot.id !== botId));
        setYourBotArmy(prevState => prevState.filter(bot => bot.id !== botId));
      }
    })
    .catch(error => console.error('Error discharging bot:', error));
  };

  return (
    <div className='body'>
      <h1>BOT BATTLR</h1>
      <div className='botsDisplay'>
        <BotCollection bots={bots} handleToggleEnlist={handleToggleEnlist} />
        <YourBotArmy yourBotArmy={yourBotArmy} handleToggleEnlist={handleToggleEnlist} handleDischarge={handleDischarge} />
      </div>
    </div>
  );
};

export default App;
