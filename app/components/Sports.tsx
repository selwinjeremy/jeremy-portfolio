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
                        The sport that I am best at is soccer. I grew up playing competitively for the City of Markham, and
                        my main position is as a Striker. I'm also a die hard fan of Arsenal FC, based in London, England, 
                        and my favourite player is Bukayo Saka.
                    </p>

                    <div className={styles.subheading}>
                    🏃‍♂️ Marathon Running
                    </div>
                    <p className={styles.text}>
                        An achievement that happened to me recently is that I ran the full Toronto Waterfront Marathon, which was 42 Kilometres!
                        This was an amazing moment for me as I spent half a year training, and couldn't believe that I was able to run such a far distance.
                    </p>

                    <div className={styles.subheading}>
                    🏊‍♂️ Swimming
                    </div>
                    <p className={styles.text}>
                        Another sport that I like to take part in is swimming. Although I only do it recreationally now, I used to be a lifeguard which
                        took over 13 years to accomplishing from passing my first swimming class to getting my National Lifeguard Liscence.
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