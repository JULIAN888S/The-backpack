import React from 'react';
import { useHistory } from 'react-router-dom';

const LevelsButton = ({ levels }) => {
  const history = useHistory();

  const goToLevel = (level) => {
    // Redirige al componente Browser con el level como parámetro
    history.push(`/browser/${level}`);
  };

  return (
    <div>
      {levels.map((level, index) => (
        <button key={index} onClick={() => goToLevel(level)}>
          {level}
        </button>
      ))}
    </div>
  );
};

export default LevelsButton;
