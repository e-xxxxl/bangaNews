import React from 'react';
import styles from './BusinessSection.module.css'; 
import mainImage from '../../assets/tinubu.jpg'; // Replace with actual image path
import sampleBusinessImage from '../../assets/tinubu.jpg'; // Replace with actual image path

const Businesssection = () => {
    const articles = [
        {
            headline: "Economic Trends: What to expect in 2025",
            thumbnail: sampleBusinessImage,
        },
        {
            headline: "Startups to Watch: The next unicorns",
            thumbnail: sampleBusinessImage,
        },
        {
            headline: "Global Markets: Opportunities and risks",
            thumbnail: sampleBusinessImage,
        },
        {
            headline: "Sustainable Business Practices in the modern era",
            thumbnail: sampleBusinessImage,
        },
        {
            headline: "The impact of remote work on global business",
            thumbnail: sampleBusinessImage,
        },
        {
            headline: "Key strategies for successful entrepreneurship",
            thumbnail: sampleBusinessImage,
        },
    ];

    return (
        <div className="container py-5">
            <h2 className={styles.sectionTitle}>Business</h2>
            <div className={`d-flex ${styles.flexContainer} gap-3`}>
                {/* Main Article Block */}
                <div className={styles.mainArticle}>
                    <img src={mainImage} alt="Business Insights" className={styles.mainArticleImg} />
                    <div className={styles.mainArticleContent}>
                        <h3 className={styles.mainArticleTitle}>
                            Adapting to Change: The Future of Global Business
                        </h3>
                        <p className={styles.mainArticleDescription}>
                            The business world is rapidly evolving. Discover how companies are adapting to new challenges and opportunities in a globalized economy.
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

export default Businesssection;
