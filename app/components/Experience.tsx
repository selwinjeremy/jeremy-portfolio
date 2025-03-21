import styles from "../styles/Experience.module.css";

export default function Experience() {
    return (
        <div className={styles.container}>

        <h2 className={styles.heading}>
                    <span className={styles.flashingBulbLeft}>💡</span>
                    Work Experience
                    <span className={styles.flashingBulbRight}>💡</span>
                </h2>
        <div className={styles.subcontainer}>
            {/* Text Section */}
            <div>

                <div className={styles.textSection}>
                    <ul className={styles.experienceList}>
                        <li className={styles.experienceItem}>
                            <div className={styles.subheading}>
                                Government of Ontario
                            </div>
                            <ul className={styles.positionList}>
                                <li className={styles.text}>
                                    IT Systems Assistant (2021 - 2021)
                                </li>
                            </ul>
                        </li>

                        <li className={styles.experienceItem}>
                            <div className={styles.subheading}>
                                STAN AI
                            </div>
                            <ul className={styles.positionList}>
                                <li className={styles.text}>
                                    Customer Success Intern (2021 - 2022)
                                </li>
                                <li className={styles.text}>
                                    Software Engineer Intern (2022 - 2024)
                                </li>
                            </ul>
                        </li>

                        <li className={styles.experienceItem}>
                            <div className={styles.subheading}>
                                National Bank Financial Markets
                            </div>
                            <ul className={styles.positionList}>
                                <li className={styles.text}>
                                    Full Stack Developer Intern (2024 - 2025)
                                </li>
                                <li className={styles.text}>
                                    Financial Analyst (2025 - Current)
                                </li>
                            </ul>
                        </li>
                    </ul>
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
        </div>
    );
}