import React from 'react';

function PetItem(props) {
    const { client, deleteClient } = props;

    const { id, name, owner, date, time, content } = client;

    return (
        <li>
            <div className='float-right'>{date} {time}</div>
            <h3>
                <span>{name}</span>
                <button
                    className='btn btn-danger btn-sm'
                    onClick={() => { deleteClient(id) }}
                >
                    Удалить
                </button>
            </h3>
            <h5>{owner}</h5>
            <p>{content}</p>
        </li>
    )
}

export default PetItem;