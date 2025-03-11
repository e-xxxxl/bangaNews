import React from 'react';
import styles from './HealthSection.module.css'; // Import the CSS Module
import mainImage from '../../assets/health.jpg'; // Replace with actual image path
import sampleHealthImage from '../../assets/health.jpg'; // Replace with actual image path
import { Link } from 'react-router-dom';

const HealthSection = () => {
    const articles = [
        {
            headline: "10 Tips for a Healthier Lifestyle",
            thumbnail: sampleHealthImage,
        },
        {
            headline: "Mental Health: Breaking the Stigma",
            thumbnail: sampleHealthImage,
        },
        {
            headline: "The Future of Medicine: Innovations to Watch",
            thumbnail: sampleHealthImage,
        },
        {
            headline: "Nutrition Myths: What to Believe",
            thumbnail: sampleHealthImage,
        },
        {
            headline: "Exercise Routines for Busy Professionals",
            thumbnail: sampleHealthImage,
        },
        {
            headline: "How Sleep Impacts Overall Health",
            thumbnail: sampleHealthImage,
        },
    ];

    return (
        <div className="container py-5">
            <h2 className={styles.sectionTitle}>Health</h2>
            <div className={`d-flex ${styles.flexContainer}`}>
                {/* Main Article Block */}
                <div className={styles.mainArticle}>
                  <Link to="/health">
                  <img src={mainImage} alt="Health Insights" className={styles.mainArticleImg} />
                  </Link>
                    <div className={styles.mainArticleContent}>
                        <h3 className={styles.mainArticleTitle}>
                            The Path to Wellness: Embracing a Balanced Lifee
                        </h3>
                        <p className={styles.mainArticleDescription}>
                            Learn how to achieve a healthier lifestyle by focusing on nutrition, mental health, and physical activities.
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

export default HealthSection;