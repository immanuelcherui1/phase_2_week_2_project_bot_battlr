import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ yourBotArmy, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {yourBotArmy.map(bot => (
        <Bot key={bot.id} bot={bot} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      ))}
    </div>
  );
};

export default YourBotArmy;
