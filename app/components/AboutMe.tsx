import styles from "../styles/AboutMe.module.css";

export default function AboutMe() {
    return (
        <div className={styles.container}>
            {/* Text Section */}
            <h2 className={styles.heading}>
                    <span className={styles.flashingStarLeft}>⭐</span>
                    About Me
                    <span className={styles.flashingStarRight}>⭐</span>
                </h2>
            <div className={styles.subcontainer}>

                <div className={styles.textSection}>
                    <p className={styles.text}>
                    I'm Jeremy Selwin, a software developer with a CS degree from Queen’s University. I live in Toronto 
                    and work as an Analyst at National Bank Financial Markets, where I blend my passion for coding with finance.
                    </p>

                    <p className={styles.text}>
                    Outside of work, I stay active with soccer, basketball, running, swimming, and walks with my dog, Benji. 
                    I also love playing music, like the piano and drums. 
                    Traveling across North America, Europe, and East Asia has given me a deeper appreciation for different cultures.
                    </p>

                    <p className={styles.text}>
                    During my time at Queen’s, I led QHacks, the university’s largest student-run hackathon, 
                    and worked as a research and teaching assistant, gaining valuable leadership and academic experience.
                    </p>

                    <p className={styles.text}>
                    Keep scrolling to explore my passions—sports, music, travel, and side projects!
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