import React,{useEffect, useState} from 'react';
import Logo from '../component/Logo';
import Navigation from '../component/Navigation';
import axios from 'axios';
import Article from '../component/Article';

const News = () => {

    const [newsData, setNewsData] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        getData();
    }, [])
    const getData =() =>{

        axios.get('http://localhost:3003/articles').then((res) => setNewsData(res.data));
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        
        if (content.length < 150){
            setError(true);
        }
        else{
            axios.post('http://localhost:3003/articles', {
                author: author,
                content: content,
                date: Date.now(),
            })
            .then(() => {
                setError(false);
                setAuthor("");
                setContent("");
                getData()
            })
        }
    }

    return (
        <div className="news-container">
            <Navigation />
            <Logo />
            <h1>News</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => setAuthor(e.target.value)}
                        type="text" 
                        placeholder="name" 
                        value={author}/>
                <textarea  style= {{border: error ? "1px solid red" : "none" }}
                            onChange={(e) => setContent(e.target.value)} 
                            placeholder="Message" value={content}/>

                {error && <p>please, write at minum 150 characters</p>}
                <input type="submit" value="Send" />
            </form>
            <ul>
                {newsData
                .sort((a,b) => b.date-a.date)
                .map((article) =>(
                    <Article key={article.id} article={article}/>
                ))}
            </ul>
        </div>
    );
};

export default News;