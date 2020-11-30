import React from 'react';

const Music = (props) => {
    return ( <div>
        {
            props.music.map((m) => {
                return (
                    <div key={m.id}>
                        <p>{m.name}</p>
                        <p>{m.likeCount}</p>
                        <button onClick={ () => {props.like(m.id) } }> Like </button>
                        <button onClick={ () => {props.dislike(m.id)} }> Dislike </button>
                    </div>
                )
            })
        }

    </div>);
};

export default Music;