import Link from "next/link"
import styles from "./tooltip.module.css"

export default function CardPlayButton() {

    return (
        <div className={styles.tooltip}>
            <span className={styles.tooltiptext}>Play Playlist</span>
            <Link href="/playerpage">
                <button
                    className="mt-4 p-3 rounded-xl bg-purple-600 text-xl text-amber-400"
                // onClick={() => setSongID(d.SongID, d.ThumbHttpPath)}
                >
                    <svg width="32" height="32" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </button>
            </Link>
        </div>
    )
}