import React from 'react';
import Bot from './Bot';

const BotCollection = ({ bots, handleToggleEnlist }) => {
  return (
    <div>
      <h2>All Bots</h2>
      {bots.map(bot => (
        <Bot key={bot.id} bot={bot} handleToggleEnlist={handleToggleEnlist} />
      ))}
    </div>
  );
};

export default BotCollection;
