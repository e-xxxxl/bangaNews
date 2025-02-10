import React from 'react'
import styles from './HealthLonepage.module.css'; // Import the CSS Module
import mainImage from '../../../assets/health.jpg'; // Replace with actual image path
const HealthLonepage = () => {
    return (
        <>

            <div className="container py-5" >
                <h2 className={styles.sectionTitle}>Health</h2>
                {/* Main Article Block */}
                <div className={styles.mainArticle}>
                    <img src={mainImage} alt="Health Insights" className={styles.mainArticleImg} />
                    <div className={styles.mainArticleContent}>
                        <h3 className={styles.mainArticleTitle}>
                            The Path to Wellness: Embracing a Balanced Life
                        </h3>
                        <p className={styles.mainArticleDescription}>
                            Learn how to achieve a healthier lifestyle by focusing on nutrition, mental health, and physical activities.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HealthLonepage