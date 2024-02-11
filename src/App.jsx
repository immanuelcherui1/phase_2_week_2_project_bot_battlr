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

  const enlistBot = (bot) => {
    if (!yourBotArmy.find(enlistedBot => enlistedBot.id === bot.id)) {
      setYourBotArmy(prevState => [...prevState, bot]);
    }
  };

  const releaseBot = (botId) => {
    setYourBotArmy(prevState => prevState.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        setYourBotArmy(prevState => prevState.filter(bot => bot.id !== botId));
      }
    })
    .catch(error => console.error('Error discharging bot:', error));
  };


  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy yourBotArmy={yourBotArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;
