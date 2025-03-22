import styles from "../styles/Travelling.module.css";

export default function Travelling() {
    return (
        <div className={styles.container}>
            {/* Text Section */}
            <h2 className={styles.heading}>
                    <span className={styles.airplaneLeft}>🛫</span> Travels <span className={styles.airplaneRight}>🛫</span>
                </h2>
            <div className={styles.subcontainer}>

                <div className={styles.textSection}>
                    <div className={styles.subheading}>
                    🍕 Italy
                    </div>
                    <p className={styles.text}>
                    My favorite trip was to Italy with my soccer teammates! 
                    We explored Rome, Napoli, Florence, Pompeii, and the Amalfi Coast—all while enjoying incredible food.
                    </p>

                    <div className={styles.subheading}>
                    🚢 Carribean Cruise
                    </div>
                    <p className={styles.text}>
                    A cruise with my high school friends to Mexico and Honduras was my first trip without family, and it definitely sparked my love for travel.
                    </p>

                    <div className={styles.subheading}>
                    🦅 United States of America
                    </div>
                    <p className={styles.text}>
                    I visit the U.S. often for the warm weather and fun activities. As a kid, I went to Myrtle Beach and Florida a lot, but now I frequently visit New York State.
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