import styles from "../styles/Entertainment.module.css";

export default function Entertainment() {
    return (
        <div className={styles.container}>
            {/* Text Section */}
            <h2 className={styles.heading}>
                    <span className={styles.musicNoteLeft}>🎵</span>
                    <span className={styles.musicNoteLeft}>🎶</span>
                    Music and Entertainment
                    <span className={styles.musicNoteRight}>🎶</span>
                    <span className={styles.musicNoteRight}>🎵</span>
                </h2>
            <div className={styles.subcontainer}>

                <div className={styles.textSection}>
                    <div className={styles.subheading}>
                    🎹 Instruments
                    </div>
                    <p className={styles.text}>
                    I grew up playing piano and later switched to drums. 
                    You can watch me drop my sticks mid-performance in the video... RIP.
                    </p>

                    <div className={styles.subheading}>
                    🎤 Music
                    </div>
                    <p className={styles.text}>
                    I spend way too much time on Spotify, constantly discovering music and updating playlists. I love Hip-Hop and Alternative music, 
                    with favorite artists like Travis Scott, Drake, Don Toliver, The Wallows, and SZA.
                    </p>

                    <div className={styles.subheading}>
                    📺 Entertainment
                    </div>
                    <p className={styles.text}>
                    I’m also a big fan of animated shows like Naruto, Pokémon, and Family Guy. 
                    I also watch Sidemen daily as I've been a fan since I was 13 years old!
                    </p>
                </div>
            </div>

            {/* Image Grid with Flip Effect */}
            <div className={styles.imageGrid}>
                {[
                    { type: "video", src: "/images/drumming-fail.mp4", alt: "Drumming fail video" },
                    { type: "image", src: "/images/travis-scott-concert.png", alt: "Travis Scott" },
                    { type: "image", src: "/images/naruto.jpg", alt: "Naruto" },
                ].map((item, index) => (
                    <div key={index} className={`${styles.imageContainer} ${item.type === 'video' ? styles.videoContainer : ''}`}>
                        {item.type === 'image' ? (
                            <div className={styles.imageInner}>
                                {/* Front (Image) */}
                                <img src={item.src} alt={item.alt} className={styles.imageFront} />
                                {/* Back (Alt Text) */}
                                <div className={styles.imageBack}>{item.alt}</div>
                            </div>
                        ) : (
                            <video className={styles.video} controls>
                                <source src={item.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}