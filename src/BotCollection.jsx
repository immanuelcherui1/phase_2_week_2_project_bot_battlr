import React from 'react';
import Bot from './Bot';

const BotCollection = ({ bots, handleToggleEnlist }) => {
  return (
    <div>
         <h2>ALL BOTS</h2>
        <div className='bot-collection'>
     
      {bots.map(bot => (
        <Bot key={bot.id} bot={bot} handleToggleEnlist={handleToggleEnlist} />
      ))}
    </div>
    </div>
  );
};

export default BotCollection;
