import styles from "../styles/Sports.module.css";

export default function Sports() {
    return (
        <div className={styles.container}>
            {/* Text Section */}
            <h2 className={styles.heading}>
                <span className={styles.soccerBallLeft}>🏀</span>
                    Sports
                <span className={styles.soccerBallRight}>🏀</span>
                </h2>
            <div className={styles.subcontainer}>


                <div className={styles.textSection}>
                    <div className={styles.subheading}>
                    ⚽ Soccer
                    </div>
                    <p className={styles.text}>
                    I grew up playing competitive soccer for the City of Markham as a Striker. 
                    I'm also a die-hard Arsenal FC fan, and my favorite player is Bukayo Saka.
                    </p>

                    <div className={styles.subheading}>
                    🏃‍♂️ Marathon Running
                    </div>
                    <p className={styles.text}>
                    I recently ran the 42 km Toronto Waterfront Marathon after six months of training—an incredible achievement I never thought possible.
                    </p>

                    <div className={styles.subheading}>
                    🏊‍♂️ Swimming
                    </div>
                    <p className={styles.text}>
                    I used to be a lifeguard, a journey that took 13 years from my first swim class to earning my National Lifeguard License. 
                    Now, I swim recreationally.
                    </p>
                </div>
            </div>

            {/* Image Grid with Flip Effect */}
            <div className={styles.imageGrid}>
                {[
                    { src: "/images/toronto-marathon.jpg", alt: "Completing my first ever Marathon" },
                    { src: "/images/richmond-hill-tournament.jpg", alt: "Winning tournament MVP for the Richmond Hill Challenge Cup" },
                    { src: "/images/markham-lifeguard.jpg", alt: "My lifeguarding team with the city of markham" },
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