import React from 'react';
import Evenement from './evenement.jsx';

const Expert = ({ expert }) => {
  return (
    <div className='border p-4 rounded-lg'>
      <li className='list-none'>
        <strong>{expert.nom_complet}</strong>
      </li>
      <Evenement events={expert.événements} />
    </div>
  );
};

export default Expert;