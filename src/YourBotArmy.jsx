import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ yourBotArmy, handleToggleEnlist }) => {
  return (
    <div>
        <h2>YOUR BOT ARMY</h2>
        <div className='bot'>
      {yourBotArmy.map(bot => (
        <Bot key={bot.id} bot={bot} isEnlisted={true} handleToggleEnlist={handleToggleEnlist} />
      ))}
    </div>
    </div>
  );
};

export default YourBotArmy;
