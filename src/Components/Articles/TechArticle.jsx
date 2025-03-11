import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TechArticle = () => {
    const { id } = useParams(); // Get article ID from URL
    const [article, setArticle] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3003/news/${id}`) // Corrected API endpoint
            .then((response) => {
                setArticle(response.data);
            })
            .catch((error) => {
                console.error("Error fetching article:", error);
            });
    }, [id]);

    if (!article) return <p>Loading...</p>;

    return (
        <div className="container py-5">
            <h2>{article.title}</h2>
            <img src={article.media_url} alt={article.title} style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} />
            <p className="mt-3">{article.content}</p>
        </div>
    );
};

export default TechArticle;
