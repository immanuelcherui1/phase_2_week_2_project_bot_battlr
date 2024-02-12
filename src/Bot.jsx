import React from 'react';

const Bot = ({ bot, isEnlisted, handleToggleEnlist, handleDischarge }) => {
  const handleBotClick = () => {
    handleToggleEnlist(bot);
  };

  const handleDischargeClick = () => {
    handleDischarge(bot.id);
  };

  return (
    <div className='eachBot'>
      <div onClick={handleBotClick} style={{ cursor: 'pointer' }}>
        <h3>{bot.name}</h3>
        <table>
          <tbody>
            <tr>
              <td> <img src={bot.avatar_url} alt="Bot Avatar" /> </td>
            </tr>
            <tr>
              <td>Health:</td>
              <td>{bot.health}</td>
            </tr>
            <tr>
              <td>Damage:</td>
              <td>{bot.damage}</td>
            </tr>
            <tr>
              <td>Armor:</td>
              <td>{bot.armor}</td>
            </tr>
            <tr>
              <td>Bot Class:</td>
              <td>{bot.bot_class}</td>
            </tr>
            <tr>
              <td>Date Created:</td>
              <td>{bot.created_at}</td>
            </tr>
            <tr>
              <td>Date Updated:</td>
              <td>{bot.updated_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {isEnlisted && <button onClick={() => handleDischargeClick(bot.id)}>X</button>}
    </div>
  );
};

export default Bot;
