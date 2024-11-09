import React from 'react';
import expertsData from '../expertsData.js';
import Expert from './expert.jsx';

const Experts1 = () => {
  return (
    <div className="flex justify-center">
      <ul className="list-disc">
        {expertsData.map((expert) => (
          <li key={expert.id} className="mb-4">
            <Expert expert={expert} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experts1;