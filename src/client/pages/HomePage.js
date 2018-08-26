import React from 'react';

const Home = () => {
  return (
    <div>
      <div>This is Home baby</div>
      <button onClick={() => console.log('Hi there')}>Press me!</button>
    </div>
  );
};

export default {
  component: Home
};
