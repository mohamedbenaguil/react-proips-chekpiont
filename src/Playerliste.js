import React from 'react'
import players from './Players'
import Player from './Player'


function Playerliste() {
  return (
    <div>
    {players.map(el=>
    <Player props={el} />
    )}
    </div>
  )
}

export default Playerliste