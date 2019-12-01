import React from 'react';

import PetItem from './PetItem';

function PetList(props) {
  const { clients, deleteClient } = props;

  return (
    <ul className='list'>
      {clients.map(client => {
        return (
          <PetItem
            key={client.id}
            client={client}
            deleteClient={deleteClient}
          />
        )
      })}
    </ul>
  )
}

export default PetList;
