import React from 'react';
import axios from 'axios';
const Delete = () => {

    //props.id === { id } as we see below
    const handleDelete = ({ id }) => {
        axios.delete('http://localhost:3003/articles/' + id);
        window.location.reload();
    };
    // const handleDelete = () => {
    //     console.log('Yes');
    // }

    return (
            <button
            onClick ={() => {
                if(window.confirm('Want to delete this article ?')){
                    handleDelete();
                }
            }}
            >Delete</button>
    );
};

export default Delete;