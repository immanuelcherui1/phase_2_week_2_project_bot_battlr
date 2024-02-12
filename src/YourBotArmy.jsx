import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ yourBotArmy, handleToggleEnlist, handleDischarge }) => {
  const handleDischargeClick = (botId) => {
    handleDischarge(botId);
  };

  return (
    <div>
      <h2>YOUR BOT ARMY</h2>
      {yourBotArmy.map(bot => (
        <div key={bot.id} className='bot'>
          <Bot bot={bot} isEnlisted={true} handleToggleEnlist={handleToggleEnlist} />
          <button onClick={() => handleDischargeClick(bot.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
