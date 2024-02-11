import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ yourBotArmy, handleToggleEnlist }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {yourBotArmy.map(bot => (
        <Bot key={bot.id} bot={bot} isEnlisted={true} handleToggleEnlist={handleToggleEnlist} />
      ))}
    </div>
  );
};

export default YourBotArmy;
