// import React from 'react';
// import styles from './TechSection.module.css'; // Import the CSS Module
// import aiImage from '../../assets/trumppp.jpg'; // Replace with actual image path
// import sampleTechImage from '../../assets/trumppp.jpg'; // Replace with actual image path
// import { Link } from 'react-router-dom';

// const TechSection = () => {
//     const articles = [
//         {
//             headline: "AI Revolution: How AI is transforming the tech industry",
//             thumbnail: sampleTechImage,
//         },
//         {
//             headline: "Cloud Computing: The backbone of modern technology",
//             thumbnail: sampleTechImage,
//         },
//         {
//             headline: "Cybersecurity in 2025: Challenges and solutions",
//             thumbnail: sampleTechImage,
//         },
//         {
//             headline: "The rise of Quantum Computing",
//             thumbnail: sampleTechImage,
//         },
//         {
//             headline: "5G Networks: The next step in mobile connectivity",
//             thumbnail: sampleTechImage,
//         },
//         {
//             headline: "Tech startups to watch in 2025",
//             thumbnail: sampleTechImage,
//         },
//     ];

//     return (
//         <div className="container py-5">
//             <h2 className={styles.sectionTitle}>Technology</h2>
//             <div className={`d-flex ${styles.flexContainer} gap-3`}>
//                 {/* Main Article Block */}
//                 <div className={styles.mainArticle}>
//                     <Link to='/technology'>
//                     <img src={aiImage} alt="AI News" className={styles.mainArticleImg} />
//                     </Link>
//                     <div className={styles.mainArticleContent}>
//                         <h3 className={styles.mainArticleTitle}>
//                             The future of AI: What to expect in the next decade
//                         </h3>
//                         <p className={styles.mainArticleDescription}>
//                             As artificial intelligence continues to evolve, its impact on various industries is becoming more profound. Here's what the future holds.
//                         </p>
//                     </div>
//                 </div>

//                 {/* List of Smaller Articles */}
//                 <div className={styles.articleList}>
//                     {articles.map((article, index) => (
//                         <div key={index} className={styles.smallArticle}>
//                             <img src={article.thumbnail} alt={article.headline} className={styles.smallArticleImg} />
//                             <p className={styles.smallArticleHeadline}>{article.headline}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TechSection;

import React, { useEffect, useState } from "react";
import styles from "./TechSection.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import sampleTechImage from "../../assets/trumppp.jpg"; // Default fallback image

const TechSection = () => {
    const [mainArticle, setMainArticle] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3003/news/filter/category", { params: { category: "tech", postType: "headline" } })

            .then(response => {
                if (response.data.length > 0) {
                    setMainArticle(response.data[0]); // Get the latest headline post
                }
            })
            .catch(error => {
                console.error("Error fetching main article:", error);
            });
    }, []);

    const articles = [
        { id: 1, headline: "AI Revolution: How AI is transforming the tech industry", thumbnail: sampleTechImage },
        { id: 2, headline: "Cloud Computing: The backbone of modern technology", thumbnail: sampleTechImage },
        { id: 3, headline: "Cybersecurity in 2025: Challenges and solutions", thumbnail: sampleTechImage },
        { id: 4, headline: "The rise of Quantum Computing", thumbnail: sampleTechImage },
        { id: 5, headline: "5G Networks: The next step in mobile connectivity", thumbnail: sampleTechImage },
        { id: 6, headline: "Tech startups to watch in 2025", thumbnail: sampleTechImage },
    ];

    return (
        <div className="container py-5">
            <h2 className={styles.sectionTitle}>Technology</h2>
            <div className={`d-flex ${styles.flexContainer} gap-3`}>
                
                {/* Main Article Block */}
                <div className={styles.mainArticle}>
                    {mainArticle ? (
                        <>
                            <Link to={`/article/${mainArticle._id}`}>
                                <img 
                                    src={mainArticle.media_url || sampleTechImage} 
                                    alt={mainArticle.title} 
                                    className={styles.mainArticleImg} 
                                />
                            </Link>
                            <div className={styles.mainArticleContent}>
                                <h3 className={styles.mainArticleTitle}>{mainArticle.title}</h3>
                                <p className={styles.mainArticleDescription}>{mainArticle.content.substring(0, 150)}...</p>
                            </div>
                        </>
                    ) : (
                        <p>Loading main article....</p>
                    )}
                </div>

                {/* List of Smaller Articles */}
                <div className={styles.articleList}>
                    {articles.map((article) => (
                        <Link to={`/article/${article.id}`} key={article.id} className={styles.articleLink}>
                            <div className={styles.smallArticle}>
                                <img src={article.thumbnail} alt={article.headline} className={styles.smallArticleImg} />
                                <p className={styles.smallArticleHeadline}>{article.headline}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechSection;
