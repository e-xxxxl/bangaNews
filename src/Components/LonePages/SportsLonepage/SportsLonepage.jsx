import React from 'react'
import styles from './SportsLonepage.module.css'; // Import the CSS Module
import mainImage from '../../../assets/eagless.jpg'; // Replace with actual image path
const SportsLonepage = () => {
  return (
    <>
        <div className="container py-5">
            <h2 className={styles.sectionTitle}>Sports</h2>
                            {/* Main Article Block */}
                            <div className={styles.mainArticle}>
                                <img src={mainImage} alt="Sports Highlights" className={styles.mainArticleImg} />
                                <div className={styles.mainArticleContent}>
                                    <h3 className={styles.mainArticleTitle}>
                                        The Road to Gloryy: What it Takes to Win Big
                                    </h3>
                                    <p className={styles.mainArticleDescription}>
                                        Discover the dedication, strategy, and grit required to excel in the world of sports, from grassroots efforts to global championships.
                                    </p>
                                </div>
                            </div>             
        </div>
    </>
  )
}

export default SportsLonepage