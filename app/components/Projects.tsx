import styles from "../styles/Projects.module.css";

export default function Projects() {
    return (
        <div className={styles.container}>
            {/* Text Section */}
            <div>
                <div className={styles.heading}>💻 Side Projects 💻</div>
                <div className={styles.videoGrid}>
                    <div className={styles.videoContainer}>
                        <div className={`${styles.subheading} ${styles.typingText}`}>🤖 Campus Companion 🤖</div>
                        <iframe
                            className={styles.video}
                            src="https://www.youtube.com/embed/9rOlfyppjJA?si=rlt8tSvbwPnGjHIe"
                            title="CaCo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <p className={styles.text}>All-in-one Texting Assistant for Queen's University</p>
                    </div>

                    <div className={styles.videoContainer}>
                    <div className={`${styles.subheading} ${styles.typingText}`}>❓Song Cipher❓</div>
                        <video className={styles.video} controls>
                            <source src="/images/song-cipher.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className={styles.text}>Wordle-inspired Spotify song guessing game</p>
                    </div>

                    <div className={styles.videoContainer}>
                    <div className={`${styles.subheading} ${styles.typingText}`}>🎧 SpotiLight 🎧</div>
                        <iframe
                            className={styles.video}
                            src="https://www.youtube.com/embed/E91ISr_zqLM?si=GUL5lZC85pu0fbSt"
                            title="SpotiLight"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <p className={styles.text}>LED Light Speed automation based on played music</p>
                    </div>
                </div>
            </div>
        </div>
    );
}