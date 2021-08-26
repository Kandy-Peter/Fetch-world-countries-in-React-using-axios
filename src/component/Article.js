import React, { useState } from 'react';
import axios from "axios";
import Delete from './Delete';

const Article = ({ article }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState("");

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('en-EN',{
            year: "numeric",
            month:"long",
            day:"numeric",
            hour:"numeric",
            minute:"numeric"
        })

        return newDate;
    }

    const data = {
        author: article.author,
        //the conditon is used to avoid an empty content when the user didn't nothing
        //because the content could be ' content:"" '
        content: editedContent ? editedContent : article.content,
        date: article.date,

    }

    const handleEdit = () =>{
        axios.put('http://localhost:3003/articles/' + article.id, data)
        .then(() => {
            setIsEditing(false)
        }) 
        
    }

    return (
        <div className="article"
            style={{background: isEditing ? "rgb(248, 185, 185)" : "#fff"}}
        >
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>post on {dateParser(article.date)}</em>

            </div>
            {isEditing ? (
                <textarea 
                onChange = {(e) => setEditedContent(e.target.value)}
                autoFocus defaultValue={editedContent ? editedContent : article.content}></textarea>
            ) : (
                <p>{editedContent ? editedContent : article.content}</p>
            )
            }
           
            <div className="btn-conrainer">
                {isEditing ? (
                    <button onClick = {handleEdit}>Valider</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                )}
               
                <Delete id={article.id}/>
            </div>
        </div>
    );
};

export default Article;