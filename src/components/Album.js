import React from 'react';

const PlayList = (props) => (
    <div>
    {
        props.album.length > 0 ?
        <div>
        <p>Album Name: {props.name}</p>
        <React.Fragment>
        {
            props.album.map((alb,i) => (
                <div key={i}>
                    <p>{alb.title}</p>
                </div>
            ))
        }
        </React.Fragment>
        </div>
        : <p className="mt-4">No Album found</p>
    } 
    </div>
)

export default PlayList;