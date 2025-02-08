import React from 'react';
import styles from './EntertainmentSection.module.css'; // Import the CSS Module
import mainImage from '../../assets/burna.jpg'; // Replace with actual image path
import sampleEntertainmentImage from '../../assets/burna.jpg'; // Replace with actual image path
import { Link } from 'react-router-dom';

const Entertainmentsection = () => {
    const articles = [
        {
            headline: "Top 10 movies to watch this year",
            thumbnail: sampleEntertainmentImage,
        },
        {
            headline: "Music trends: What's hot in 2025",
            thumbnail: sampleEntertainmentImage,
        },
        {
            headline: "The rise of streaming platforms",
            thumbnail: sampleEntertainmentImage,
        },
        {
            headline: "Behind the scenes: Making blockbuster hits",
            thumbnail: sampleEntertainmentImage,
        },
        {
            headline: "Celebrity interviews: Insights into their lives",
            thumbnail: sampleEntertainmentImage,
        },
        {
            headline: "Award season highlights: The winners and surprises",
            thumbnail: sampleEntertainmentImage,
        },
    ];

    return (
        <div className="container py-5">
            <h2 className={styles.sectionTitle}>Entertainment</h2>
            <div className={`d-flex ${styles.flexContainer}`}>
                {/* Main Article Block */}
                <div className={styles.mainArticle}>
                    <Link to="/entertainment">
                    <img src={mainImage} alt="Entertainment Highlights" className={styles.mainArticleImg} />
                    </Link>
                    <div className={styles.mainArticleContent}>
                        <h3 className={styles.mainArticleTitle}>
                            The Evolution of Entertainment: A New Era of Creativity
                        </h3>
                        <p className={styles.mainArticleDescription}>
                            Explore how the entertainment industry is evolving with new technologies, creative storytelling, and changing audience preferences.
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

export default Entertainmentsection;
