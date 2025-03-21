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
                        Instruments played a big part of my childhood, where I grew up playing the piano and transitioned to drums at an older age.
                        You can see my epic fail on the video to the right, where I dropped my sticks half way through a performance RIP.
                    </p>

                    <div className={styles.subheading}>
                    🎤 Music
                    </div>
                    <p className={styles.text}>
                        I spend an unhealthy time on Spotify, trying to find new music, make more playlists, and change the theme of my account. I'm a huge 
                        fan of Hip-Hop and Alternative music, and my favourite artists are Travis Scott, Drake, Don Toliver, The Wallows, and SZA
                    </p>

                    <div className={styles.subheading}>
                    📺 Entertainment
                    </div>
                    <p className={styles.text}>
                        I'm a big fan of animated television, such as Naruto, Pokemon, and Family Guy, as these shows never fail to make me smile and laugh.
                        Another thing I really enjoy watching is Youtube, where I'm a huge fan of the Sidemen, who I have been watch daily since I was 13 years old.
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