import styles from "../styles/Experience.module.css";

export default function Experience() {
    return (
        <div className={styles.container}>
            {/* Text Section */}
            <div>
                <h2 className={styles.heading}>
                <span className={styles.flashingBulbLeft}>💡</span>
                    Work Experience
                <span className={styles.flashingBulbRight}>💡</span>
                </h2>

                <div className={styles.textSection}>
                    <div className={styles.subheading}>
                        Government of Ontario - IT Systems Assistant
                    </div>
                    <p className={styles.text}>
                        My first ever position was as an IT Systems Assistant with the Government of Ontario, where I got a strong understanding of full-time employment, collaboration in an office setting, and 
                        a taste of working remotely.
                    </p>
                    <div className={styles.subheading}>
                        STAN AI - Software Engineer
                    </div>
                    <p className={styles.text}>
                        My second position was as a Software Engineer with STAN AI. This position means a lot to me, because I joined STAN as their 5th employee, and worked there for over 2 years alternating between full-time and part-time work
                        based on my academics.
                    </p>
                    <div className={styles.subheading}>
                        National Bank Financial Markets - Full Stack Developer
                    </div>
                    <p className={styles.text}>
                        My final internship in undergrad was with National Bank Financial Markets. This was my first internship where I had 
                        a big role with a major corporation, and it gave me a lot of growth in terms of coding practices, and professionalism.
                    </p>
                </div>
                <div className={styles.logoContainer}>
                <div className={styles.logoWrapper}>
                    <img className={styles.logo} src="/images/logos/typescript.svg" alt="Typescript" />
                    <img className={styles.logo} src="/images/logos/javascript.svg" alt="Javascript" />
                    <img className={styles.logo} src="/images/logos/python.svg" alt="Python" />
                    <img className={styles.logo} src="/images/logos/java.svg" alt="Java" />
                    <img className={styles.logo} src="/images/logos/html.svg" alt="HTML" />
                    <img className={styles.logo} src="/images/logos/css.svg" alt="CSS" />
                    <img className={styles.logo} src="/images/logos/mongo.svg" alt="Mongo DB" />
                    <img className={styles.logo} src="/images/logos/sql.svg" alt="SQL" />
                    <img className={styles.logo} src="/images/logos/aws.svg" alt="AWS" />
                    <img className={styles.logo} src="/images/logos/gcp.svg" alt="GCP" />
                    <img className={styles.logo} src="/images/logos/docker.svg" alt="Docker" />
                    <img className={styles.logo} src="/images/logos/github.svg" alt="Github" />
                    <img className={styles.logo} src="/images/logos/react.svg" alt="React" />
                    <img className={styles.logo} src="/images/logos/streamlit.svg" alt="Streamlit" />
                    <img className={styles.logo} src="/images/logos/postman.svg" alt="Postman" />
                </div>
                </div>
            </div>


            {/* Image Grid with Flip Effect */}
            <div className={styles.imageGrid}>
                {[
                    { src: "/images/ontario.jpeg", alt: "Ontario Ministry of Government and Consumer Services" },
                    { src: "/images/national-bank.jpg", alt: "National Bank Financial Markets" },
                    { src: "/images/stan-ai.jpeg", alt: "Team photo with STAN AI" },
                ].map((image, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <div className={styles.imageInner}>
                            {/* Front (Image) */}
                            <img src={image.src} alt={image.alt} className={styles.imageFront} />
                            {/* Back (Alt Text) */}
                            <div className={styles.imageBack}>{image.alt}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}