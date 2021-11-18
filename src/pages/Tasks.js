import React from 'react';
import { useParams } from 'react-router-dom';

export default function Tasks() {
    let params =useParams();
    console.log(params)

    return (
        <div>
            <h1>Tasks {params.username} and userid {params.userid}</h1>
        </div>
    )
}
