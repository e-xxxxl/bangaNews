import React from 'react'
import styles from './EntertainmentLonepage.module.css'; // Import the CSS Module
import mainImage from '../../../assets/burna.jpg'; // Replace with actual image path
const EntertainmentLonepage = () => {
  return (
    <>
        <div className="container py-5">
                <h2 className={styles.sectionTitle}>Entertainment</h2>
                                {/* Main Article Block */}
                                <div className={styles.mainArticle}>
                                    <img src={mainImage} alt="Entertainment Highlights" className={styles.mainArticleImg} />
                                    <div className={styles.mainArticleContent}>
                                        <h3 className={styles.mainArticleTitle}>
                                            The Evolution of Entertainment: A New Era of Creativity
                                        </h3>
                                        <p className={styles.mainArticleDescription}>
                                            Explore how the entertainment industry is evolving with new technologies, creative storytelling, and changing audience preferences.
                                        </p>
                                    </div>
                                </div>

        </div>
    
    </>
  )
}

export default EntertainmentLonepage