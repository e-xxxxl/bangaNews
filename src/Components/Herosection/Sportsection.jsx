import React from 'react';
import styles from './SportSection.module.css'; // Import the CSS Module
import mainImage from '../../assets/eagless.jpg'; // Replace with actual image path
import sampleSportImage from '../../assets/eagless.jpg'; // Replace with actual image path
import { Link } from 'react-router-dom';

const Sportsection = () => {
    const articles = [
        {
            headline: "Champions League: Highlights and analysis",
            thumbnail: sampleSportImage,
        },
        {
            headline: "Olympics 2025: Key athletes to watch",
            thumbnail: sampleSportImage,
        },
        {
            headline: "Top 10 most memorable matches of all time",
            thumbnail: sampleSportImage,
        },
        {
            headline: "The rise of esports: A new era of competition",
            thumbnail: sampleSportImage,
        },
        {
            headline: "Fitness trends: How athletes are staying ahead",
            thumbnail: sampleSportImage,
        },
        {
            headline: "Behind the scenes: Life of a professional athlete",
            thumbnail: sampleSportImage,
        },
    ];

    return (
        <div className="container py-5">
            <h2 className={styles.sectionTitle}>Sports</h2>
            <div className={`d-flex ${styles.flexContainer}`}>
                {/* Main Article Block */}
                <div className={styles.mainArticle}>
                    <Link to="/sports">
                    <img src={mainImage} alt="Sports Highlights" className={styles.mainArticleImg} />
                    </Link>
                    <div className={styles.mainArticleContent}>
                        <h3 className={styles.mainArticleTitle}>
                            The Road to Gloryy: What it Takes to Win Big
                        </h3>
                        <p className={styles.mainArticleDescription}>
                            Discover the dedication, strategy, and grit required to excel in the world of sports, from grassroots efforts to global championships.
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

export default Sportsection;
