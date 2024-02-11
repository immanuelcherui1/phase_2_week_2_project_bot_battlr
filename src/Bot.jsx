import React from 'react';

const Bot = ({ bot, enlistBot, releaseBot, dischargeBot }) => {
  const handleEnlistClick = () => {
    enlistBot(bot);
  };

  const handleReleaseClick = () => {
    releaseBot(bot.id);
  };

  const handleDischargeClick = () => {
    dischargeBot(bot.id);
  };

  return (
    <div>
      <h3>{bot.name}</h3>
      {enlistBot && <button onClick={handleEnlistClick}>Enlist</button>}
      {releaseBot && <button onClick={handleReleaseClick}>Release</button>}
      {dischargeBot && <button onClick={handleDischargeClick}>Discharge</button>}
    </div>
  );
};

export default Bot;
