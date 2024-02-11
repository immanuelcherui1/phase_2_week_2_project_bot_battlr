import React from 'react';

const Bot = ({ bot, handleToggleEnlist }) => {
  const handleBotClick = () => {
    handleToggleEnlist(bot);
  };

  return (
    <div onClick={handleBotClick} style={{ cursor: 'pointer' }}>
      <h3>{bot.name}</h3>
    </div>
  );
};

export default Bot;
