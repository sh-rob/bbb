import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">UNLEASH YOUR POTENTIAL</span>
          <h2 className="section-title">Elite Training for Elite Warriors</h2>
        </div>
        <div className={styles.aboutWrapper}>
          <div className={styles.trainerPhoto}>
            <div className={styles.photoPlaceholder}>
              <span>ALBERT BRYANT</span>
              <p>Head Trainer</p>
            </div>
          </div>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              Body&apos;s By Bert is a top-tier fitness business located in Douglasville, Georgia. We offer a wide range of fitness services to help you achieve your health goals. Our experienced trainer will work with you to develop a personalized workout plan tailored to your needs and fitness level. Whether you&apos;re looking to lose weight, build muscle, or improve your overall health and wellness, we have a program for you.
            </p>
            <p className={styles.aboutText}>
              Our services include one-on-one personal training, group fitness classes, and athlete training. With Body&apos;s By Bert, you&apos;ll get the support you need to transform your body and improve your quality of life. We look forward to earning your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
