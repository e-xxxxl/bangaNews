import React from 'react'
import styles from './BusinessLonepage.module.css'; 
import mainImage from '../../assets/tinubu.jpg'; 
const BusinessSection = () => {
  return (
    <>

      <div>
        
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

      </div>

    </>
  )
}

export default BusinessSection