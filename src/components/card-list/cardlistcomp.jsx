import React from 'react';
import { Card } from '../card/card.component'
import '/Programming/react/root/src/components/card-list/card-list.styles.css'
export const CardList = props => 
{
    return <div className='card-list'>
        {
          props.monsters.map(monster => (
          <Card key={monster.id} monster={monster} />
          ))}
        </div>
}