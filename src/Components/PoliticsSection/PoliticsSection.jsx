import React from 'react'
import styles from './PoliticsSection.module.css'; // Import the CSS Module
import trumpImage from '../../assets/trumppp.jpg'; // Replace with actual image path

const PoliticsSection = () => {
  return (
    <>
        <div className="container py-5">
           <h2 className={styles.sectionTitle}>Politics</h2>
            <div className={styles.mainArticle}>
                                <img src={trumpImage} alt="Trump News" className={styles.mainArticleImg} />
                                <h3 className={styles.mainArticleTitle}>
                                    Fears over deportation, border closure as Trump returns to White House
                                </h3>
                                <p className={styles.mainArticleDescription}>
                                    As the 47th President of the United States, Donald Trump, takes office today, this marks his second journey to the White House.
                                </p>
                </div>
            

        </div>
    
    </>
  )
}

export default PoliticsSection