import React from 'react';
import styles from './TechSection.module.css'; // Import the CSS Module
import aiImage from '../../assets/trumppp.jpg'; // Replace with actual image path
import sampleTechImage from '../../assets/trumppp.jpg'; // Replace with actual image path
import { Link } from 'react-router-dom';

const TechSection = () => {
    const articles = [
        {
            headline: "AI Revolution: How AI is transforming the tech industry",
            thumbnail: sampleTechImage,
        },
        {
            headline: "Cloud Computing: The backbone of modern technology",
            thumbnail: sampleTechImage,
        },
        {
            headline: "Cybersecurity in 2025: Challenges and solutions",
            thumbnail: sampleTechImage,
        },
        {
            headline: "The rise of Quantum Computing",
            thumbnail: sampleTechImage,
        },
        {
            headline: "5G Networks: The next step in mobile connectivity",
            thumbnail: sampleTechImage,
        },
        {
            headline: "Tech startups to watch in 2025",
            thumbnail: sampleTechImage,
        },
    ];

    return (
        <div className="container py-5">
            <h2 className={styles.sectionTitle}>Technology</h2>
            <div className={`d-flex ${styles.flexContainer} gap-3`}>
                {/* Main Article Block */}
                <div className={styles.mainArticle}>
                    <Link to='/technology'>
                    <img src={aiImage} alt="AI News" className={styles.mainArticleImg} />
                    </Link>
                    <div className={styles.mainArticleContent}>
                        <h3 className={styles.mainArticleTitle}>
                            The future of AI: What to expect in the next decade
                        </h3>
                        <p className={styles.mainArticleDescription}>
                            As artificial intelligence continues to evolve, its impact on various industries is becoming more profound. Here's what the future holds.
                        </p>
                    </div>
                </div>

                {/* List of Smaller Articles */}
                <div className={styles.articleList}>
                    {articles.map((article, index) => (
                        <div key={index} className={styles.smallArticle}>
                            <img src={article.thumbnail} alt={article.headline} className={styles.smallArticleImg} />
                            <p className={styles.smallArticleHeadline}>{article.headline}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechSection;
