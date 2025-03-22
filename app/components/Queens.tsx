import styles from "../styles/University.module.css";

export default function Queens() {
    return (
        <div className={styles.container}>
            {/* Text Section */}
            <h2 className={styles.heading}>
                <span className={styles.pencilAnimationLeft}>✏️</span>
                University
                <span className={styles.pencilAnimationRight}>✏️</span>
            </h2>
            <div className={styles.subcontainer}>
            

                <div className={styles.textSection}>
                    <div className={styles.subheading}>
                    👑 QHacks
                    </div>
                    <p className={styles.text}>
                    I was involved in QHacks throughout my time at Queen’s, serving as First Year Rep, Head of Sponsorships, President, and Advisor. 
                    It shaped my professional growth and built lasting relationships.
                    </p>

                    <div className={styles.subheading}>
                    🔬 Research
                    </div>
                    <p className={styles.text}>
                    From Sept 2023 to Sept 2024, I worked with the Modelling and Analysis in Software Engineering group, using Generative AI 
                    to automate YANG model template generation for Telus network configurations.
                    </p>

                    <div className={styles.subheading}>
                    👨‍🏫 Teaching
                    </div>
                    <p className={styles.text}>
                    As a TA for over two years, I taught courses in 
                    Algorithms, Data Analytics, Software Specifications, Object-Oriented Computing, and Python.
                    </p>
                </div>
            </div>

            {/* Image Grid with Flip Effect */}
            <div className={styles.imageGrid}>
                {[
                    { src: "/images/qhacks-solo.jpg", alt: "Speaking at the Opening Ceremony for QHacks" },
                    { src: "/images/qhacks-team.jpg", alt: "The 2024 QHacks Executive Team" },
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