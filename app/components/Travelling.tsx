import styles from "../styles/Travelling.module.css";

export default function Travelling() {
    return (
        <div className={styles.container}>
            {/* Text Section */}
            <div>
                <h2 className={styles.heading}>
                    <span className={styles.airplaneLeft}>🛫</span> Travels <span className={styles.airplaneRight}>🛫</span>
                </h2>

                <div className={styles.textSection}>
                    <div className={styles.subheading}>
                    🇮🇹 Italy
                    </div>
                    <p className={styles.text}>
                        The best vacation I've ever been on has to be my trip to Italy. I went with my soccer teammates
                        for a bit over a week and enjoyed the amazing food while seeing places like Rome, Napoli, Florence, Pompeii, and the Almafi Coast.
                    </p>

                    <div className={styles.subheading}>
                    🚢 Carribean Cruise
                    </div>
                    <p className={styles.text}>
                        Another very memorable trip was a cruise vacation with my high school friends to Mexico and Honduras. This was my first ever time travelling
                        with people other than my family, and it definitely ignited my passion for going on more trips.
                    </p>

                    <div className={styles.subheading}>
                    🦅 United States of America
                    </div>
                    <p className={styles.text}>
                        I've found myself going to the United States really often for the warmer weather or really fun activities.
                        Growing up, I used to go to the south very often, specifically Myrtle Beach and Florida, but now I find myself in New York regularly.
                    </p>

                </div>

            </div>

            {/* Image Grid with Flip Effect */}
            <div className={styles.imageGrid}>
                {[
                    { src: "/images/almafi-coast.png", alt: "The Almafi Coast in Italy" },
                    { src: "/images/mexico-beach.jpg", alt: "A beach in Cozumel, Mexico" },
                    { src: "/images/pompeii.png", alt: "The Pompeii ruins next to Naples, Italy" },
                    { src: "/images/new-york-city.png", alt: "The Rockefeller Christmas Tree in New York City" },
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