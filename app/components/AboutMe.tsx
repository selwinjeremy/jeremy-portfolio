import styles from "../styles/AboutMe.module.css";

export default function AboutMe() {
    return (
        <div className={styles.container}>
            {/* Text Section */}
            <div>
                <h2 className={styles.heading}>
                    <span className={styles.flashingStarLeft}>⭐</span>
                    About Me
                    <span className={styles.flashingStarRight}>⭐</span>
                </h2>

                <div className={styles.textSection}>
                    <p className={styles.text}>
                        I'm Jeremy Selwin, a software developer with a Computer Science degree from Queen's University.
                        Currently based in Toronto, I work as an Analyst at National Bank Financial Markets, where I
                        blend my coding skills with my interest in finance.
                    </p>

                    <p className={styles.text}>
                        Outside of work, I stay active through soccer, basketball, running, swimming, and walking my dog, Benji.
                        I also enjoy playing music—piano, drums, and ukulele.
                    </p>

                    <p className={styles.text}>
                        I'm passionate about traveling, having explored North America, Europe, and East Asia, which has
                        broadened my perspective on different cultures.
                    </p>

                    <p className={styles.text}>
                        At Queen's, I led QHacks, the largest student-run hackathon, and gained valuable leadership experience.
                        I also worked as a research and teaching assistant, learning from both academic and industry perspectives.
                    </p>

                    <p className={styles.text}>
                        As you keep scrolling, you'll learn more about my passions for sports, music, travel, and side projects. Enjoy the journey through my story!
                    </p>
                </div>
            </div>

            {/* Image Grid with Flip Effect */}
            <div className={styles.imageGrid}>
                {[
                    { src: "/images/snow-picture.png", alt: "Lake Ontario by Queen's in the winter" },
                    { src: "/images/benji.jpg", alt: "My half-pomenarian half-poodle pet Benji" },
                    { src: "/images/bmo-field.jpg", alt: "At BMO Field watching a Toronto FC game" },
                    { src: "/images/cruise-sunset.png", alt: "A carribean cruise which went to Mexico and Honduras" },
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