import React from 'react'
import styles from './BusinessLonepage.module.css'; 
import mainImage from '../../../assets/tinubu.jpg'; 

const BusinessLonepage = () => {
  return (
    <>
      <div className="container py-5">
          {/* Main Article Block */}
           <h2 className={styles.sectionTitle}>Business</h2>
          <div className={styles.mainArticle}>
            <img src={mainImage} alt="Business Insights" className={styles.mainArticleImg} />
            <div className={styles.mainArticleContent}>
              <h3 className={styles.mainArticleTitle}>
                Adapting to Change: The Future of Global Businesss
              </h3>
              <p className={styles.mainArticleDescription}>
              The business world is rapidly evolving, driven by technological advancements, shifting consumer behaviors, and global economic trends. Companies are constantly adapting to new challenges and opportunities in an increasingly interconnected and competitive marketplace. From the rise of digital transformation and automation to the growing emphasis on sustainability and ethical business practices, organizations must stay agile to thrive. Businesses are also leveraging data analytics, artificial intelligence, and remote work solutions to enhance efficiency and meet customer demands. As industries continue to evolve, companies that embrace innovation and adaptabilityy will be best positioned for long-term success in the global economy..
              </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessLonepage