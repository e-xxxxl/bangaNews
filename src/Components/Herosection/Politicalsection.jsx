import React from 'react';
import styles from './PoliticalSection.module.css'; // Import the CSS Module
import trumpImage from '../../assets/trumppp.jpg'; // Replace with actual image path
import sampleImage from '../../assets/vdmm.jpeg'; // Replace with actual image path

const PoliticalSection = () => {
    const articles = [
        {
            headline: "Nigeria going about identity management the wrong way - Ex-postmaster general",
            thumbnail: sampleImage,
        },
        {
            headline: "Friends at war: How Tinubu, Sanusi's once cozy relationship unravelled",
            thumbnail: sampleImage,
        },
        {
            headline: "Obi, Otti's caretaker committee faults Abure's Appeal court victory",
            thumbnail: sampleImage,
        },
        {
            headline: "Edo tribunal: Ighodalo tenders more evidence",
            thumbnail: sampleImage,
        },
        {
            headline: "Nasarawa LP declares support for Abure, hails appeal court's judgment",
            thumbnail: sampleImage,
        },
        {
            headline: "Rivers crisis: PDP denies accepting court ruling, disowns Ologunagba's claim",
            thumbnail: sampleImage,
        },
    ];

    return (
        <div className="container py-5">
            <h2 className={styles.sectionTitle}>Politics</h2>
            <div className={`d-flex ${styles.flexContainer} gap-3`}>
                {/* Main Article Block */}
                <div className={styles.mainArticle}>
                    <img src={trumpImage} alt="Trump News" className={styles.mainArticleImg} />
                    <h3 className={styles.mainArticleTitle}>
                        Fears over deportation, border closure as Trump returns to White House
                    </h3>
                    <p className={styles.mainArticleDescription}>
                        As the 47th President of the United States, Donald Trump, takes office today, this marks his second journey to the White House.
                    </p>
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

                {/* Advertisement Block */}
                <div className={styles.advertisement}>
                    <h5>ADVERTISEMENT</h5>
                </div>
            </div>
        </div>
    );
};

export default PoliticalSection;
