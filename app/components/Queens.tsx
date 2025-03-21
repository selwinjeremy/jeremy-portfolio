import styles from "../styles/University.module.css";

export default function Queens() {
    return (
        <div className={styles.container}>
            {/* Text Section */}
            <div>
            <h2 className={styles.heading}>
                <span className={styles.pencilAnimationLeft}>✏️</span>
                University
                <span className={styles.pencilAnimationRight}>✏️</span>
            </h2>

                <div className={styles.textSection}>
                    <div className={styles.subheading}>
                    👑 QHacks
                    </div>
                    <p className={styles.text}>
                        I've been a part of QHacks throughout my whole time at Queen's, where I've had the roles of a First Year Rep, Head of Sponsorships, President, and Advisor.
                        I truly believe that my involvement in the club made me the professional that I am today, and helped me foster many long lasting relationships.
                    </p>

                    <div className={styles.subheading}>
                    🔬 Research
                    </div>
                    <p className={styles.text}>
                        From September 2023 to September 2024, I was a part of the Modelling and Analysis in Software Engineering group, where I focused on 
                        using Generative AI to automate YANG model template generation for Telus network configurations.
                    </p>

                    <div className={styles.subheading}>
                    👨‍🏫 Teaching
                    </div>
                    <p className={styles.text}>
                        I spent over 2 years as a Teaching Assistant at Queen's, where I taught a variety of courses such as Algorithms, Data Analytics, Software Specifications, 
                        Object-Oriented Computing, and Intro to Python Programming.
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