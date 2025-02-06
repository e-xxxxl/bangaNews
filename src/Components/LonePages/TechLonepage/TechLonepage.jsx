import React from 'react'
import styles from './Techlonepage.module.css'; // Import the CSS Module
import aiImage from '../../../assets/trumppp.jpg'; // Replace with actual image path
const TechLonepage = () => {
  return (
    <>
            <div className="container py-5">
                <h2 className={styles.sectionTitle}>Technology</h2>
                                {/* Main Article Block */}
                                <div className={styles.mainArticle}>
                                    <img src={aiImage} alt="AI News" className={styles.mainArticleImg} />
                                    <div className={styles.mainArticleContent}>
                                        <h3 className={styles.mainArticleTitle}>
                                            The future of AI: What to expect in the next decade
                                        </h3>
                                        <p className={styles.mainArticleDescription}>
                                            As artificial intelligence continues to evolve, its impact on various industries is becoming more profound. Here's what the future holds.
                                        </p>
                                    </div>
                                </div>
            </div>
    </>
  )
}

export default TechLonepage