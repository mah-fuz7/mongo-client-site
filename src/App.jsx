import React, { Suspense } from 'react';
import PlayerCard from './Components/PlayerCard';

const userPromise=fetch('http://localhost:3000/users')
.then(res=> res.json())

const App = () => {
  return (
    <div>
      <h1> Data is coming sooon from Backend | Stay truned with us</h1>
              <PlayerCard  userPromise={userPromise} ></PlayerCard>

    </div>
  );
};

export default App;